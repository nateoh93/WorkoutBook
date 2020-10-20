import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentIndex from './comment_index'

const mSTP = (state, ownProps) => {
    debugger

    let comments = [];
    if (ownProps.post.commentIds) {
        ownProps.post.commentIds.forEach( commentId => {
            comments.push(state.entities.comments[commentId])
        })
    }

    return ({
        // posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[ownProps.match.params.userId],
        comments: comments,
        // post: ownProps.post
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        fetchPost: (postId) => dispatch(fetchPost(postId))
    })
}

export default withRouter(connect(mSTP, mDTP)(CommentIndex))