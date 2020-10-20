export const createComment = (comment) => {
    // debugger
    return $.ajax({
        url: `/api/comments`,
        method: `POST`,
        data: {comment}
    })
}

export const updateComment = (comment) => {
    return $.ajax({
        url: `/api/comments/${comment.id}`,
        method: `PATCH`,
        data: comment,
        contentType: false,
        processData: false
    })
}

export const deleteComment = (commentId) => {
    // debugger
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: `DELETE`,
    })   
}