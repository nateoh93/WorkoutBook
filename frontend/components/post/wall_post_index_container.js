import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import WallPostIndex from './wall_post_index';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // debugger
    // const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        openModal: state.ui.modal,
        posts: Object.values(state.entities.posts),
        // formType: 'Create Post',
        currentUser: state.entities.users[state.session.id],
        postProfile: state.entities.users[ownProps.match.params.userId]
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        otherForm: () => dispatch(openModal('Edit Post')),
        // createPost: (post) => dispatch(createPost(post)),
        // closeModal: () => dispatch(closeModal()),
        fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
        // fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
}

export default withRouter(connect(mSTP, mDTP)(WallPostIndex))