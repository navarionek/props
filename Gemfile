source 'https://rubygems.org'

gem 'rails', '~> 4'

gem 'active_model_serializers', git: 'https://github.com/rails-api/active_model_serializers', branch: '0-9-stable'
gem 'airbrussh'
gem 'animate-rails'
gem 'app_konfig'
gem 'attr_extras'
gem 'celluloid-io', require: ['celluloid/current', 'celluloid/io']
gem 'coffee-rails'
gem 'decent_exposure'
gem 'easy_tokens'
gem 'gon'
gem 'grape'
gem 'grape-entity'
gem 'grape-swagger'
gem 'grape-swagger-rails'
gem 'gravatar-ultimate'
gem 'haml-rails'
gem 'haml_coffee_assets', '1.16.1' # remove this gem from Gemfile after getting rid of js_stack
gem 'hashie-forbidden_attributes'
gem 'jquery-rails'
gem 'js_stack'
gem 'kaminari'
gem 'lograge'
gem 'netguru_theme'
gem 'omniauth'
gem 'omniauth-slack'
gem 'auth0'
gem 'pg'
gem 'react_webpack_rails'
gem 'redis-namespace'
gem 'rollbar'
gem 'sidekiq'
gem 'sass-rails'
gem 'searchlight'
gem 'sendgrid'
gem 'skylight'
gem 'slack-ruby-client'
gem 'sprockets-rails', '2.3.3' # temporary lock, JST does not work properly with sprockets 3
gem 'thin'
gem 'uglifier'
gem 'whenever', require: false
gem 'pundit'

# deploy
gem 'capistrano', '3.3.5'
gem 'capistrano-docker', git: 'https://github.com/netguru/capistrano-docker', tag: 'v0.2.6'

source 'https://rails-assets.org' do
  gem 'rails-assets-select2', '3.5.2'
end

gem 'rails_12factor', group: :production

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'foreman'
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'html2haml'
  gem 'letter_opener'
  gem 'quiet_assets'
  gem 'rack-mini-profiler'
  gem 'rb-fchange', require: false
  gem 'rb-fsevent', require: false
  gem 'rb-inotify', require: false
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'bundler-audit', require: false
  gem 'factory_girl_rails'
  gem 'ffaker'
  gem 'guard-rubocop'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'rspec-rails'
end

group :test do
  gem 'codeclimate-test-reporter', require: nil
  gem 'scrutinizer-ocular'
  gem 'email_spec'
  gem 'shoulda-matchers', '~> 3.1'
  gem 'database_cleaner'
end
