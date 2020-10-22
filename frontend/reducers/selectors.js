export const getLikes = (state, item ) => {
    let likes = [];
    const type = item.post_author_id ? 'Post' : 'Comment';

    Object.values(state.entities.likes).forEach( like => {
        if ( like.likeable_id === item.id && like.likeable_type === type) {
            likes.push(like)
        }
    })

    return likes
}