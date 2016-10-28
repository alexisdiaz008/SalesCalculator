Rails.application.routes.draw do
  resources :industries
  root'industries#index'

end
