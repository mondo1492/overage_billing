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
      render json: @custoemr.errors.full_messages, status: 422
    end
  end

  def index
    @customers = Customer.all
  end

  private

  def customer_params
    params.require(:customer).permit(
      :name, :tier, :annualPayment, :startDate, :endDate, :latestBillingDate,
      :outstandingBalance, :billingCyclesSincePayment, :email, :address,
      :monthlyApiLimit, :overageUnitCost
    )
  end
end
