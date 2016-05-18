class SessionsController < ApplicationController
	def new
		@current_user = current_user
		@user = User.new
	end
	def create
	    user_params = params.require(:user).permit(:email, :password)
	    @user = User.confirm(user_params)
	    if @user
	      login(@user)
	      redirect_to "/users/#{@user.id}"
	    else
	      redirect_to sign_in_path
	    end
  	end
  	def destroy 
		logout
  		redirect_to "/"
  	end
end
