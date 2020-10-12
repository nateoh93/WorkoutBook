@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname, :birthday, :bio, :city, :work, :school
    end
end