class FortunesController < ApplicationController
	def index
		@fortunes = Fortune.all
		render :index
	end
	def new
		@fortune = Fortune.new
		render :new
	end
	def create
		fortune_params = params.require(:fortune).permit(:quote, :author)
		fortune = Fortune.new(fortune_params)
		if fortune.save
			redirect_to fortune
		end
	end
	def show
		# id = params[:id]
		@fortunes = Fortune.all
		# @fortune = Fortune.find(id)
		render :show
	end
	def edit
		id = params[:id]
		@fortune = Fortune.find(id)
		render :edit
	end
	def update
		fortune_id = params[:id]
		fortune = Fortune.find(fortune_id)
		updated_attributes = params.require(:fortune).permit(:quote, :author)
		fortune.update_attributes(updated_attributes)
		redirect_to fortune
	end
	def destroy
		id = params[:id]
		fortune = Fortune.find(id)
		fortune.destroy
		redirect_to fortunes_path
	end
	def gameBoard
		render :gameBoard
	end

end
