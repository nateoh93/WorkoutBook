Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy, :index]
    resources :posts, only: [:create, :update, :destroy, :index, :show]
    resources :comments, only: [:create, :update, :destroy, :index]
    resources :friend_requests, only: [:index, :create, :destroy, :update] #delete update and index
    resources :likes, only: [:create, :destroy]
  end
  
end
