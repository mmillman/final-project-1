class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :body
      t.integer :question_id
      t.integer :answerer_id

      t.timestamps
    end

    add_index :answers, :question_id
    add_index :answers, :answerer_id
  end
end
