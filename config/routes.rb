# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: %i[index update getUser]
    get 'my_posts', to: 'posts#my_posts'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
