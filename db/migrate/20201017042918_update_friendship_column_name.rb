class UpdateFriendshipColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :friendships, :user1_id, :user_id
    rename_column :friendships, :user2_id, :friend_id
  end
end
