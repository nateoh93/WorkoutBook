class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.integer :profile_user_id, null: false
      t.integer :post_author_id, null: false
      t.timestamps
    end

    add_index :posts, :profile_user_id
    add_index :posts, :post_author_id
  end
end
