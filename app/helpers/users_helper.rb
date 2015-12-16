module UsersHelper

	def increment_score
		puts "incrementing score from User Controller"
		current_user.score += 1
		current_user.save
		
	end
end
