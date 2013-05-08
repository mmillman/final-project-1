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
    :title => "Unusual behavior with array?",
    :body => "I wrote some code to make an array of 5 items and then I indexed
      into position 2. I got no errors. Could someone help me out?",
    :asker_id => 1,
    :accepted_answer_id => 2,
  )
  Question.create!(
    :title => "How to use git status properly?",
    :body => "I typed git status and it showed the status of my files.
      What am I missing?",
    :asker_id => 1,
    :accepted_answer_id => nil,
  )
  Question.create!(
    :title => "How to make a text input field fill up remaining width of div?",
    :body => "I'd like to have a label 'Title', followed by a text field
      that expands to fill the div's width. If I set the width to 100%,
      then the text input field will go to the next line and fill up the
      entire width of the div. I'd like to see the text input field stay
      on the same line as the label.",
    :asker_id => 1,
    :accepted_answer_id => nil,
  )
  Question.create!(
    :title => "How to get expected CSS behavior?",
    :body => "I just went to style my website, and everything lined up properly
      -- what am I doing wrong?",
    :asker_id => 2,
    :accepted_answer_id => nil,
  )
  Question.create!(
    :title => "What is the best way to get rails out of my head?",
    :body => "I tried out a few association methods in rails today that I didn't
      define myself, and they worked! Help please!",
    :asker_id => 3,
    :accepted_answer_id => nil,
  )
  Question.create!(
    :title => "What's the best practice to rectify this situation?",
    :body => "Today I ran some code and it didn't have any errors. What's the
      best way to address this?",
    :asker_id => 2,
    :accepted_answer_id => nil,
  )

  Answer.create!(
    :answerer_id => 2,
    :question_id => 1,
    :body => "Index into a position greater than 4 and call a method on the
      nil result.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 1,
    :body => "Write your array of length 5 in C and then index into a position
      greater than 4.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 2,
    :body => "Try making a typo, like 'git sattus'",
  )
  Answer.create!(
    :answerer_id => 2,
    :question_id => 3,
    :body => "This question is not appropriate for Stack Half Full since you
      do not have things working already.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 3,
    :body => "People would be able to help you better if you solved your
      problem first.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 4,
    :body => "Keep going. CSS will deliver.",
  )
  Answer.create!(
    :answerer_id => 3,
    :question_id => 6,
    :body => "Get very little sleep, eat poorly, and have a few drinks",
  )

  Comment.create!(
    :commenter_id => 2,
    :commentable_id => 1,
    :commentable_type => 'Question',
    :body => "What a great question!"
  )
  Comment.create!(
    :commenter_id => 3,
    :commentable_id => 1,
    :commentable_type => 'Question',
    :body => "I was wondering the same thing!"
  )
  Comment.create!(
    :commenter_id => 1,
    :commentable_id => 1,
    :commentable_type => 'Answer',
    :body => "Well written answer here. Very nice."
  )

  Tag.create!(
    :name => "fun"
  )
  Tag.create!(
    :name => "homework"
  )
  Tag.create!(
    :name => "important"
  )
  Tag.create!(
    :name => "urgent"
  )
  Tag.create!(
    :name => "curious"
  )
  Tag.create!(
    :name => "funny"
  )

  Tagging.create!(
    :tag_id => 6,
    :question_id => 1
  )
  Tagging.create!(
    :tag_id => 5,
    :question_id => 2
  )
  Tagging.create!(
    :tag_id => 4,
    :question_id => 3
  )
  Tagging.create!(
    :tag_id => 3,
    :question_id => 4
  )
  Tagging.create!(
    :tag_id => 2,
    :question_id => 5
  )
  Tagging.create!(
    :tag_id => 1,
    :question_id => 6
  )
end