json.set! @request.id do
    json.extract! @request, :id, :requester_id, :requestee_id
end