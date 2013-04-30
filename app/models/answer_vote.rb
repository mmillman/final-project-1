class AnswerVote < ActiveRecord::Base
  attr_accessible :user_id, :answer_id, :type

  belongs_to :user
  belongs_to :answer
end
