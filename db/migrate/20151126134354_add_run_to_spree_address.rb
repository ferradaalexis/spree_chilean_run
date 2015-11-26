class AddRunToSpreeAddress < ActiveRecord::Migration
  def change
    add_column :spree_addresses, :run, :string
  end
end
