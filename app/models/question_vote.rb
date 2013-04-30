class QuestionVote < ActiveRecord::Base
  attr_accessible :user_id, :question_id, :type
end
