class CreateUserProfiles < ActiveRecord::Migration
  def change
    create_table :user_profiles do |t|
      t.integer :user_id
      t.string :fname
      t.string :lname
      t.datetime :birthday
      t.text :about_me

      t.timestamps
    end

    add_index :user_profiles, :user_id, :unique => true
  end
end
