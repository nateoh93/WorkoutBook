import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteComment, updateComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import CommentIndexItem from './comment_index_item';
import { createLike, deleteLike } from '../../actions/like_actions';
import { getLikes } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[postProfileId],
        comment: ownProps.comment,
        likes: getLikes(state, ownProps.comment)
    })
}

const mDTP = (dispatch) => {
    return ({
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
    })
}

export default withRouter(connect(mSTP, mDTP)(CommentIndexItem))