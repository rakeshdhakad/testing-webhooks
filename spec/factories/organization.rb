FactoryBot.define do
  factory :organization do
    name { (0..8).map { rand(65..90).chr }.join }
  end
end
