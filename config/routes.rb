StackOverflowClone::Application.routes.draw do
  devise_for :users

  # Devise setup step 2
  root :to => 'static_pages#home'

  resources :questions, :only => [:create, :index, :new]

end
