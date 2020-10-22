import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentIndexItem from './comment_index_item';
import { createLike, deleteLike } from '../../actions/like_actions';
import { getLikes } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
    // debugger

    // let comments = [];
    // if (ownProps.post.commentIds) {
    //     ownProps.post.commentIds.forEach(commentId => {
    //         comments.push(state.entities.comments[commentId])
    //     })
    // }

    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        // posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        // postProfile: state.entities.users[ownProps.match.params.userId],
        postProfile: state.entities.users[postProfileId],
        comment: ownProps.comment,
        // post: ownProps.post,
        likes: getLikes(state, ownProps.comment)
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
    })
}

export default withRouter(connect(mSTP, mDTP)(CommentIndexItem))