StackOverflowClone::Application.routes.draw do
  devise_for :users

  resources :users, :only => [:index, :show]

  # Devise setup step 2
  root :to => 'static_pages#home'

  match 'questions/ask' => 'questions#new', :as => 'ask_question', :via => :get
  resources :questions, :only => [:create, :index, :show]

end
