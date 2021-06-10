class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :name
      t.string :symbol
      t.string :color
      t.string :position
      t.string :default_position
      t.string :initial
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
