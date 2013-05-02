StackOverflowClone::Application.routes.draw do
  devise_for :users

  # Devise setup step 2
  root :to => 'questions#index'

  resources :questions, :only => [:create]

end
