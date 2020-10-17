class Friendship < ApplicationRecord
    validates :user1_id, :user2_id, presence: true
    validates :user1_id, uniqueness: { scope: :user2_id}
    validate :reject_self_add

    belongs_to :user,
        foreign_key: :user1_id,
        class_name: :User
        
    belongs_to :friend,
        foreign_key: :user2_id,
        class_name: :User

    def reject_self_add
        if user1_id == user2_id
            errors[:user1_id] << "You can't add yourself"
        end
    end

end