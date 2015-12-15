Rails.application.routes.draw do
  # Route::Application.routes.draw do
  # end
    root to: "fortunes#index"
    resources :fortunes
  	resources :users 

    delete 'logout' => 'sessions#destroy'

  	get "/sign-in", to: "sessions#new"
  	post "/sessions", to: "sessions#create"

  	get "/sign_up", to: "users#new", as: "sign_up"

  resources :users

  	get "/game", to: "fortunes#gameBoard"

end
