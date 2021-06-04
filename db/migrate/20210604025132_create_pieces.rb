class CreatePieces < ActiveRecord::Migration[6.1]
  def change
    create_table :pieces do |t|
      t.string :type
      t.string :color
      t.string :location
      t.string :default_location

      t.timestamps
    end
  end
end
