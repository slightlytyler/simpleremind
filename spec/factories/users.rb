require 'faker'

FactoryGirl.define do
  sequence(:email) { |n| "person#{n}@test.com" }

  factory :user do
    email               { generate(:email) }
    first_name          { Faker::Name.first_name }
    last_name           { Faker::Name.last_name }
    password              "password"
    password_confirmation "password"

    # Address
    phone_number                  { Faker::PhoneNumber.phone_number }
    end

end