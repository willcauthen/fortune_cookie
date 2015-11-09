class CreateFortunes < ActiveRecord::Migration
  def change
    create_table :fortunes do |t|
      t.string :quote
      t.string :author

      t.timestamps null: false
    end
  end
end
