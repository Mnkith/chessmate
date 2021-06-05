Rails.application.routes.draw do
  get 'games/:id', to: 'games#show'
  # get 'pieces/index', to: 'pieces#index'
  get '/pieces', to: 'pieces#index'
  get 'games', to: 'games#index'

  post 'games', to: 'games#create'
end
