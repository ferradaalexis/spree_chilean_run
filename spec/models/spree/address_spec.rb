require 'spec_helper'

describe Spree::Address, type: :model do
  ###############
  # attributes #
  ##############
  it { expect(subject).to respond_to :run }

  ###############
  # validations #
  ###############
  it 'has a valid factory' do
    expect(FactoryGirl.build(:address)).to be_valid
  end

  context "run validations" do
    it "returns error when using a nil run" do
      expect(FactoryGirl.build(:address, run: nil)).
        to have(2).errors_on(:run)
    end

    it "returns error when using an invalid run" do
      expect(FactoryGirl.build(:address, run: '123456789')).
        to have(1).errors_on(:run)
    end

    it "creates the subject object when using a valid run" do
      expect(FactoryGirl.build(:address, run: '123456785')).
        to have(:no).errors_on(:run)
    end
  end
end
