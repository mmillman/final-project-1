class RenameCommentUserIdToCommenterId < ActiveRecord::Migration
  def change
    rename_column :comments, :user_id, :commenter_id
  end
end
