class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id], :include => :profile)

    render :json => @user
  end
end
