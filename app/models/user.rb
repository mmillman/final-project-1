class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me

  attr_accessible :display_name

  has_one :profile, :class_name => "UserProfile"
  has_many :questions, :foreign_key => :asker_id
  has_many :answers, :foreign_key => :answerer_id
  has_many :comments, :foreign_key => :commenter_id, :as => :commentable
  has_many :question_votes
  has_many :answer_votes
end
