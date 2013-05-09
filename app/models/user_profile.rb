class UserProfile < ActiveRecord::Base
  attr_accessible :user_id, :fname, :lname, :birthday, :about_me

  belongs_to :user

  validates :user_id, :fname, :lname, :presence => true
  validates :user_id, :uniqueness => true
end
