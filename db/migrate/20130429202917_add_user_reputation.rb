class AddUserReputation < ActiveRecord::Migration
  def change
    add_column :users, :display_name, :string, :default => ""
    add_column :users, :reputation, :integer, :default => 0
  end
end
