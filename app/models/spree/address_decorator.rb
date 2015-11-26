require 'run_cl'

module Spree
  Address.class_eval do
    include RunCl::ActAsRun
    Spree::PermittedAttributes.address_attributes << [:run]

    has_run_cl :run, uniq_run: false

    validates :run, presence: true
  end
end
