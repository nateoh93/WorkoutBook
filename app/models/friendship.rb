class Friendship < ApplicationRecord
    validates :user1_id, :user2_id, presence: true
    validates :user1_id, uniqueness: { scope: :user2_id}
    validates :no_self_add

    belongs_to :user,
        foreign_key: :user1_id,
        class_name: :User
        
    belongs_to :friend,
        foreign_key: :user2_id,
        class_name: :User

    after_create: :create_opposite_friendship
    after_destroy: :destroy_opposite_friendship

    def create_opposite_friendship
        Friendship.create!(user1_id: friend.id, user2_id: user.id)
    end

    def destroy_opposite_friendship
        opposite_relationship = friend.friendships.find_by(user2_id: user.id)
        if opposite_relationship
            opposite_relationship.destroy
        end
    end

    def no_self_add
        if user1_id == user2_id
            errors[:user1_id] << "You can't add yourself"
        end
    end

end