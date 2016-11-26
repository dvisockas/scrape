Rails.application.routes.draw do
  resources :parsers

  root 'parsers#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '*path' => 'application#resource', via: [:get]
end
