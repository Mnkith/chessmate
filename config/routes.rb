Rails.application.routes.draw do
  get 'games/:id', to: 'games#show'
  # get 'pieces/index', to: 'pieces#index'
  get '/pieces', to: 'pieces#index'
  get 'games', to: 'games#index'
  resources :games do
    resources :pieces
  end
  post 'games', to: 'games#create'
end
