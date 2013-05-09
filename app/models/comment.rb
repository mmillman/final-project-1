class Comment < ActiveRecord::Base
  attr_accessible :commentable_id, :commentable_type, :commenter_id, :body

  belongs_to :commenter, :class_name => "User"
  belongs_to :commentable, :polymorphic => true

  validates :commentable_id, :commentable_type, :commenter_id, :presence => true
  validates :body, :presence => :true
end
