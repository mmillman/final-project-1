class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.text :body
      t.integer :asker_id
      t.integer :accepted_answer_id

      t.timestamps
    end

    add_index :questions, :asker_id
    add_index :questions, :accepted_answer_id
  end
end
