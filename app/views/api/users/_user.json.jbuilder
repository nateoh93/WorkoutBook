json.extract! user, :id, :email, :fname, :lname, :birthday, :bio, :city, :work, :school
json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?