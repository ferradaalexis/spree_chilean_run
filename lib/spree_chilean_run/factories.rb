FactoryGirl.modify do
  factory :address do
    sequence(:run) { Run.generate }
  end
end
