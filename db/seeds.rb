# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  User.create!(
    :display_name => "Mark",
    :email => "mark@example.com",
    :password => "password"
  )
  UserProfile.create!(
    :user_id => 1,
    :fname => "Mark",
    :lname => "M",
    :birthday => "2054-08-15",
    :about_me => "Hi, my name is Mark."
  )
  User.create!(
    :display_name => "Bloop",
    :email => "bloop@example.com",
    :password => "password"
  )
  UserProfile.create!(
    :user_id => 2,
    :fname => "Bloop",
    :lname => "Bleep",
    :birthday => "1854-06-11",
    :about_me => "Hi, my name is Mark."
  )
  User.create!(
    :display_name => "BB123",
    :email => "blarp@example.com",
    :password => "password"
  )
  UserProfile.create!(
    :user_id => 3,
    :fname => "Blarp",
    :lname => "Blep",
    :birthday => "1955-01-05",
    :about_me => "Hi, my name is Mark."
  )

  Question.create!(
    :title => "Is this the first question?",
    :body => "This should be the first question...",
    :asker_id => 1,
    :accepted_answer_id => 2,
  )
  Question.create!(
    :title => "Is this the second question?",
    :body => "This should be the second question...",
    :asker_id => 1,
    :accepted_answer_id => nil,
  )

  Answer.create!(
    :answerer_id => 2,
    :question_id => 1,
    :body => "Answer to first question: yes",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 1,
    :body => "Yep, this is the first question.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 2,
    :body => "Indeed, this is the second question.",
  )
end