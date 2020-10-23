json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :email, :fname, :lname, :birthday, :bio, :city, :work, :school
            json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
            json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
        end
    end
end

json.friendships do
    @users.each do |user|
        user.friendships.each do |friend|
            json.set! friend.id do
                json.extract! friend, :id, :user_id, :friend_id
            end
        end
    end
end

json.friendRequests do
    @users.each do |user|
        user.received_requests.each do |request|
            json.set! request.id do
                json.extract! request, :id, :requester_id, :requestee_id
            end
        end
    end
end