json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :email, :fname, :lname, :birthday, :bio, :city, :work, :school
            json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
            json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
            json.friendIds user.friend_ids
        end
    end
end

json.friendships do
    @users.each do |user|
        user.friendships.each do |friendships|
            json.set! friendships.id do
                json.extract! friendships, :id, :user_id, :friend_id
            end
        end
    end
end


#may want to remove friendIds from users