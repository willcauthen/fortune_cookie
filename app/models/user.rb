class User < ActiveRecord::Base
  has_secure_password

  def self.confirm(params)
  	@user = User.find_by({email: params[:email]})
  	unless @user then return nil end
  	@user.authenticate(params[:password])
  end
end
