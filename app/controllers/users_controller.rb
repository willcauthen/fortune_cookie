class UsersController < ApplicationController
	def index
		@users = User.all
		render :index
	end

	def new
		@user = User.new
		render :new
	end

	def create
		user_params = params.require(:user).permit(:user_name, :email, :password)
		@user = User.create(user_params)
		redirect_to "/users"
	end

	def show
		@current_user = current_user
		p current_user
		# @user = User.find(params[:id])
		render :show
	end
	def update
		increment_score
	end


	private

	# def user_params
	# 	params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
	# end

end
