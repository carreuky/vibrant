class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :eventname
      t.integer :fee
      t.string :location
      t.string :date
      t.integer :slots
      t.string :details
      t.integer :user_id

      t.timestamps
    end
  end
end
