class Answer < ActiveRecord::Base
  attr_accessible :answerer_id, :body, :question_id

  belongs_to :question
  belongs_to :answerer, :class_name => "User"
  has_many :comments, :as => :commentable
  has_many :votes, :class_name => "AnswerVote"

  validates :answerer_id, :question_id, :presence => true
  validates :body, :presence => true, :length => { :minimum => 15 }
end
