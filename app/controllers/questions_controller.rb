class QuestionsController < ApplicationController
  def create
  end

  def new
    @question = Question.new
  end

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id], :include => :answers)
  end
end
