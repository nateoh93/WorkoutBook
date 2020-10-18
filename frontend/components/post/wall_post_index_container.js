import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import WallPostIndex from './wall_post_index';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // debugger
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        openModal: state.ui.modal,
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[postProfileId]
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        otherForm: (modal, id) => dispatch(openModal(modal, id)),
        // createPost: (post) => dispatch(createPost(post)),
        // closeModal: () => dispatch(closeModal()),
        fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
        // fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
}

export default withRouter(connect(mSTP, mDTP)(WallPostIndex))