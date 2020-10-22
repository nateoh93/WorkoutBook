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
       json.set! user.id do 
            user.friends.each do |friend|
                json.set! friend.id do
                    json.extract! friend, :id, :fname, :lname
                    json.profilePhoto url_for(friend.profile_photo) if friend.profile_photo.attached?
                end
            end
        end
    end
end
