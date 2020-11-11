json.users do
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end

json.friendships do
    @users.each do |user|
        user.friendships.each do |friend|
            json.set! friend.id do
                json.partial! 'api/friendships/friendship', friend: friend
            end
        end
    end
end

json.friendRequests do
    @users.each do |user|
        user.received_requests.each do |request|
            json.set! request.id do
                json.partial! 'api/friend_requests/friend_request', request: request
            end
        end
    end
end