class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :event
      t.string :site
      t.string :date
      t.string :round
      t.string :white
      t.string :black
      t.string :result
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
