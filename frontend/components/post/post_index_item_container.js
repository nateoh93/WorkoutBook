import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import { createLike, deleteLike } from '../../actions/like_actions';
import { getLikes } from '../../reducers/selectors';
import { deletePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    // debugger
    const postProfileId = ownProps.match.params.userId || state.session.id
    // debugger
    return ({
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        // postProfile: state.entities.users[ownProps.match.params.userId]
        postProfile: state.entities.users[postProfileId],
        post: ownProps.post,
        likes: getLikes(state, ownProps.post)
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        otherForm: (modal, id) => dispatch(openModal(modal, id)),
    })
}

export default withRouter(connect(mSTP, mDTP)(PostIndexItem))