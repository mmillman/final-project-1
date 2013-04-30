class Question < ActiveRecord::Base
  attr_accessible :accepted_answer_id, :asker_id, :body, :title, :tag_ids

  belongs_to :asker, :class_name => "User"
  has_many :answers
  has_many :taggings
  has_many :tags, :through => :taggings
  has_many :comments, :as => :commentable
  has_many :votes, :class_name => "QuestionVote"
end
