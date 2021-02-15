Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :users
resources :movies

resources  :genres
resources :movie_genres
resources :watch_items

resources :reviews

post "/login", to: "auth#create"
end
