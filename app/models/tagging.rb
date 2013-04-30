class Tagging < ActiveRecord::Base
  attr_accessible :tag_id, :question_id

  belongs_to :tag
  belongs_to :question
end
