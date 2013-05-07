StackOverflowClone::Application.routes.draw do
  devise_for :users

  # Devise setup step 2
  root :to => 'questions#index'

  resources :questions, :only => [:create] do
    resources :comments, :only => [:create, :index]
    resources :answers, :only => [:create, :index]
  end

  resources :answers, :only => [:index] do
    resources :comments, :only => [:create, :index]
  end

end
