source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.0'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.3'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# A fix for jQuery bind bugs caused by turbolinks
gem 'jquery-turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use unicorn as the app server
gem 'unicorn'

# Use Capistrano for deployment
gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

## CUSTOM GEMS

gem "sidekiq"
gem 'twilio-ruby'
gem "bootstrap-sass"
gem "autoprefixer-rails"
gem 'bootswatch-rails'
gem "font-awesome-rails"
gem 'sendgrid'
gem "virtus"
gem 'devise'
gem 'jquery-ui-rails'
gem 'jquery-modal-rails'
gem 'sidr-rails'
gem 'modernizr-rails'

group :development, :test do
  gem 'wirble'             # used to look better the console
  gem 'hirb'               # used to look better the console
  gem 'awesome_print'      # used to look better the console
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  # gem "parallel_tests",'0.16.10'
  # gem "zeus-parallel_tests",'0.2.4'
end

group :development do
  gem 'rb-fsevent', require: false
  gem 'better_errors'
  gem 'annotate'
  gem 'rails_db_info'
  gem 'mailcatcher'
  gem 'guard-livereload', require: false
  gem 'rack-livereload'
end

group :test do
   gem 'guard-rspec'
   gem 'faker'
   gem 'factory_girl_rails'
   gem "capybara"
   gem 'database_cleaner'
   gem "capybara-webkit"
   gem "shoulda-matchers"
   gem 'mocha', require: false
   # gem 'zeus','0.13.3'
end
