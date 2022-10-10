class CreateAttendees < ActiveRecord::Migration[6.1]
  def change
    create_table :attendees do |t|
      t.string :name
      t.string :email
      t.string :phonenumber

      t.timestamps
    end
  end
end
