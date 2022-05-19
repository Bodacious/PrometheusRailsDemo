Rails.application.routes.draw do
  resources :readings, only: [:create]
  root "cars#index"
end
