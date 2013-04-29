class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id
      t.integer :question_id

      t.timestamps
    end

    add_index :taggings, :tag_id
    add_index :taggings, :question_id
  end
end
