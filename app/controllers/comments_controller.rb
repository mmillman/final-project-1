class CommentsController < ApplicationController
  def create
    comment = Comment.new(params[:comment])
    comment.commenter_id = current_user.id

    if comment.save
      render :json => comment
    else
      render :json => comment.errors, :status => 422
    end
  end

  def index
    if params[:answer_id]
      comments = Answer.find(params[:answer_id]).comments
    else
      comments = Question.find(params[:question_id]).comments
    end

    render :json => comments
  end
end
