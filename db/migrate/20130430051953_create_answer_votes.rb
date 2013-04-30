class CreateAnswerVotes < ActiveRecord::Migration
  def change
    create_table :answer_votes do |t|
      t.integer :user_id
      t.integer :answer_id

      t.timestamps
    end

    add_index :answer_votes, :user_id
    add_index :answer_votes, :answer_id
  end
end
