class UsersController < ApplicationController
	
	def index
		@users = User.all
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		redirect_to "/users"
	end

	def show
		@current_user = current_user
	end

	def update
		increment_score
		redirect_to root_path
	end


	private

	def user_params
		params.require(:user).permit(:user_name, :email, :password, :password_confirmation)
	end

end
