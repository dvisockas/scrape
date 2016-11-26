Rails.application.routes.draw do
<<<<<<< HEAD
  resources :parsers

  root 'parsers#index'
=======
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '*path' => 'application#resource', via: [:get]
>>>>>>> d914ecce1e34d7a9bceaf926a59ddb0c942d3e5a
end
