class AddUserNumberToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :user_number, :string
  end
end
