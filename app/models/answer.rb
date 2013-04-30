class Answer < ActiveRecord::Base
  attr_accessible :answerer_id, :body, :question_id

  belongs_to :question
  belongs_to :answerer, :class_name => "User"
  has_many :comments, :as => :commentable
  has_many :votes, :class_name => "AnswerVote"
end
