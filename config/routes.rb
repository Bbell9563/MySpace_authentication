# frozen_string_literal: true

Rails.application.routes.draw do
  
  resources :users
  get '/users/api/posts' =>'api/posts#index'

  namespace :api do
    resources :posts, only: %i[index update]
    get 'my_posts', to: 'posts#my_posts'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
