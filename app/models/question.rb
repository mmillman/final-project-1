class Question < ActiveRecord::Base
  attr_accessible :accepted_answer_id, :asker_id, :body, :title
end
