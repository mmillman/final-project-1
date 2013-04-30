class CreateQuestionVotes < ActiveRecord::Migration
  def change
    create_table :question_votes do |t|
      t.integer :user_id
      t.integer :question_id

      t.timestamps
    end

    add_index :question_votes, :user_id
    add_index :question_votes, :question_id
  end
end
