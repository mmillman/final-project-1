class QuestionVote < ActiveRecord::Base
  attr_accessible :user_id, :question_id, :type

  belongs_to :user
  belongs_to :question
end
