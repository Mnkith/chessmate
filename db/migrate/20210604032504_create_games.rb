class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :event, default: ''
      t.string :site, default: ''
      t.string :date, default: ''
      t.string :round, default: ''
      t.string :white, default: ''
      t.string :black, default: ''
      t.string :result, default: ''

      t.timestamps
    end
  end
end
