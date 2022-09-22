class CreatePgheroQueryStats < ActiveRecord::Migration[5.2]
  def change
    create_table :pghero_query_stats do |t|
      t.text :database
      t.text :user
      t.text :query
      t.integer :query_hash, limit: 8
      t.float :total_time
      t.integer :calls, limit: 8
      t.timestamp :captured_at

      t.timestamps
    end

    add_index :pghero_query_stats, %I[database captured_at]
  end
end