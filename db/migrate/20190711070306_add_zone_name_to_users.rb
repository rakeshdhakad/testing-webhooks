class AddZoneNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zone_name, :string
  end
end
