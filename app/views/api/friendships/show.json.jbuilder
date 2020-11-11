json.friend do 
    json.set! @friend.id do
        json.partial! 'friendship', friend: @friend
    end
end

json.inverse_friend do 
    json.set! @inverse_friend.id do
        json.extract! @inverse_friend, :id, :user_id, :friend_id
    end
end

if @request
    json.request do
        json.set! @request.id do
            json.partial! 'api/friend_requests/friend_request', request: @request
        end
    end
end