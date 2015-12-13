class SessionsController < ApplicationController
	def new
		@current_user = current_user
		@user = User.new
		# render :new
	end
	def create
	    user_params = params.require(:user).permit(:email, :password)
	    @user = User.confirm(user_params)
	    p @user
	    if @user
	      login(@user)
	      p session[:user_id]
	      redirect_to "/users/#{@user.id}"
	    else
	      redirect_to "/sign_in"
	    end
  	end
  	def destroy 
		p session[:user_id]
		logout
		p session[:user_id]
  		redirect_to root
  	end
end
