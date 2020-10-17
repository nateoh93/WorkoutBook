export const fetchPosts = () => {
    return $.ajax({
        url: `/api/posts`,
        method: `GET`
    })
}

export const fetchPost = (postId) => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: `GET`
    })
}

export const createPost = (post) => {
    return $.ajax({
        url: `/api/posts`,
        method: `POST`,
        data: {post},
        contentType: false,
        processData: false
    })
}

export const updatePost = (post) => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: `PATCH`,
        data: {post},
        contentType: false,
        processData: false
    })
}

export const deletePost = (postId) => {
    return $.ajax({
        url: `/api/posts/postId`,
        method: `DESTROY`,
    })
}