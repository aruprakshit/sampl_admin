class CreateHotels < ActiveRecord::Migration
  def change
    create_table :hotels do |t|
      t.string :name
      t.date :booking_date

      t.timestamps null: false
    end
  end
end
