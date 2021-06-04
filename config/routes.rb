Rails.application.routes.draw do
  get 'games/show'
  # get 'pieces/index', to: 'pieces#index'
  get '/pieces', to: 'pieces#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
