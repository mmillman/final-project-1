class UserProfile < ActiveRecord::Base
  attr_accessible :user_id, :fname, :lname, :birthday, :about_me

  belongs_to :user
end
