@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname, :birthday, :bio, :city, :work, :school
        json.coverPhotoUrl url_for(user.cover_photo)
        json.profilePhotoUrl url_for(user.profile_photo)
    end
end