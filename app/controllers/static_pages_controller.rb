class StaticPagesController < ApplicationController
  def home
    @questions = Question.all
  end
end
