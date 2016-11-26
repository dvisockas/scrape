Rails.application.routes.draw do
  resources :parsers

  root 'parsers#index'
end
