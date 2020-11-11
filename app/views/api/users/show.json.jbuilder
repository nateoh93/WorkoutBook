json.user do
    json.partial! 'api/users/user', user: @user
end

json.friendships do
    @user.friendships.each do |friend|
        json.set! friend.id do
            json.partial! 'api/friendships/friendship', friend: friend
        end
    end
end


json.friendRequests do
    @user.received_requests.each do |request|
        json.set! request.id do
            json.partial! 'api/friend_requests/friend_request', request: request
        end
    end
end