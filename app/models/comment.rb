class Comment < ActiveRecord::Base
  attr_accessible :commentable_id, :commentable_type, :user_id, :body

  belongs_to :user
  belongs_to :commentable, :polymorphic => true
end
