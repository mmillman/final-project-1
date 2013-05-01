class QuestionsController < ApplicationController
  # respond_to :json
  # respond_to :html, :only => [:index]

  def create
  end

  def index
    @questions = Question.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @questions }
    end
  end

  def show
    @question = Question.find(params[:id], :include => :answers)

    render :json => @question
  end
end
