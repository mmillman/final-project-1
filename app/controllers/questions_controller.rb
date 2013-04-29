class QuestionsController < ApplicationController
  def create
  end

  def new
    @question = Question.new
  end

  def index
    @questions = Question.all
  end
end
