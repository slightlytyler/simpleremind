require 'rubygems'

# This file is copied to spec/ when you run 'rails generate rspec:install'
ENV["RAILS_ENV"] = 'test'
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'capybara/rspec'
require 'mocha/setup'

Capybara.default_selector = :css
Capybara.javascript_driver = :webkit

Dir[Rails.root.join("spec/fixtures/*.rb")].each {|f| require f}
Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}
Dir[Rails.root.join("lib/core_ext/*.rb")].each {|f| require f}


RSpec.configure do |config|
  DatabaseCleaner.strategy = :transaction
   # ## Mock Framework
   #
   # If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:
   #
   # config.include(OmniauthMacros)
   config.mock_with :mocha
   # config.mock_with :flexmock
   # config.mock_with :rr

   # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
   # config.fixture_path = "#{::Rails.root}/spec/fixtures"

   # If you're not using ActiveRecord, or you'd prefer not to run each of your
   # examples within a transaction, remove the following line or assign false
   # instead of true.
   config.use_transactional_fixtures = true


   # If true, the base class of anonymous controllers will be inferred
   # automatically. This will be the default behavior in future versions of
   # rspec-rails.
   config.infer_base_class_for_anonymous_controllers = false

   # Run specs in random order to surface order dependencies. If you find an
   # order dependency and want to debug it, you can fix the order by providing
   # the seed, which is printed after each run.
   #     --seed 1234
   config.order = "random"

   # Include Factory Girl syntax to simplify calls to factories
   config.include FactoryGirl::Syntax::Methods

   config.filter_run :focus => true
   config.run_all_when_everything_filtered = true

end



# allows capybara JS tests to run in separate thread
class ActiveRecord::Base
  mattr_accessor :shared_connection
  @@shared_connection = nil

  def self.connection
    @@shared_connection || ConnectionPool::Wrapper.new(size: 1) { retrieve_connection }
  end
end

# Forces all threads to share the same connection. This works on
# Capybara because it starts the web server in a thread.
ActiveRecord::Base.shared_connection = ActiveRecord::Base.connection


