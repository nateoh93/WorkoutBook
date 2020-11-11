json.set! @request.id do
    json.partial! 'friend_request', request: @request
end