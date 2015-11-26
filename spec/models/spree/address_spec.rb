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
end
