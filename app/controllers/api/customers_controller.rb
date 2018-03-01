class Api::CustomersController < ApplicationController

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      render :show
    else
      render json: @customer.errors.full_messages, status: 422
    end
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def update
    @customer = Customer.find(params[:id])
    if @customer.update(customer_params)
      render :show
    else
      render json: @customer.errors.full_messages, status: 422
    end
  end

  def index
    sql = "
    SELECT *
    FROM customers as c
    WHERE c.monthly_api_limit < (
          SELECT usage FROM usage_entries as u
          JOIN customers ON customers.id = customer_id
          WHERE customer_id = customers.id
          ORDER BY u.id DESC
          LIMIT 1
        )
    "

    customers = Customer.includes(:usage_entries, :bill).find_by_sql(sql)
    @customers = customers.select { |customer| customer.usage_entries.last(1).first.bill.status == params[:status] }

  end

  private

  def customer_params
    params.require(:customer).permit(
      :name, :tier, :annual_payment, :start_date, :end_date, :latest_billing_date,
      :outstanding_balance, :billing_cycles_since_payment, :email, :address,
      :monthly_api_limit, :overage_unit_cost
    )
  end
end
