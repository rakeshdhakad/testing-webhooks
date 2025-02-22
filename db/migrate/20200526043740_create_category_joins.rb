class CreateCategoryJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :category_joins do |t|
      t.references :category
      t.references :categorizable, polymorphic: true

      t.timestamps
    end
  end
end
