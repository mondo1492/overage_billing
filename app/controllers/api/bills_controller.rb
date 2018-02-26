class Api::BillsController < ApplicationController
  def update
    @bill = Bill.find(params[:id])
    if @bill.update(bill_params)
      render :show
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  private

  def bill_params
    params.require(:bill).permit(
      :usage_entry_id, :customer_id, :status, :amount, :paid_in_full, :explanation, :writeoff_approver
    )
  end
end
