json.friend do 
    json.set! @friend.id do
        json.extract! @friend, :id, :user_id, :friend_id
    end
end

json.inverse_friend do 
    json.set! @inverse_friend.id do
        json.extract! @inverse_friend, :id, :user_id, :friend_id
    end
end

json.request do
    json.set! @request.id do
        json.extract! @request, :id, :requester_id, :requestee_id
    end
end