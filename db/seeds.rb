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
    :about_me => "Hi, my name is Bloop."
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
    :about_me => "Hi, my name is Blarp."
  )

  Question.create!(
    :title => "No overflow??",
    :body => "I initialized an array of length 5 and added one item. Everything
      seems to be okay. How to fix?",
    :asker_id => 1,
    :accepted_answer_id => 2,
  )
  Question.create!(
    :title => "How to fix git status?",
    :body => "I typed git status and it showed the status of my files.
      How to fix?",
    :asker_id => 1,
    :accepted_answer_id => nil,
  )

  Answer.create!(
    :answerer_id => 2,
    :question_id => 1,
    :body => "Add 5 more items to your array to address the issue.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 1,
    :body => "Initialize more arrays of length 5 and add 6 items to one.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 2,
    :body => "Try making a typo when you type it, like 'git sattus'",
  )
end