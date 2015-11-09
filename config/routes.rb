Rails.application.routes.draw do
  # Route::Application.routes.draw do
    root to: "fortunes#index"
    resources :fortunes
  # end
end
