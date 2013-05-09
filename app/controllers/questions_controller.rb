class QuestionsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def create
    question = Question.new(params[:question])
    question.asker_id = current_user.id

    if question.save
      render :json => question
    else
      render :json => question.errors, :status => 422
    end
  end

  def index
    questions = Question.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => questions }
    end
  end

  def show
    question = Question.find(params[:id], :include => :answers)

    render :json => question
  end
end
