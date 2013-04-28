StackOverflowClone::Application.routes.draw do
  devise_for :users

  # Devise setup step 2
  root :to => 'home#index'

end
