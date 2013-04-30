class AnswerVote < ActiveRecord::Base
  attr_accessible :user_id, :answer_id, :type
end
