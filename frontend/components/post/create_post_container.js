import {connect} from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchAllUsers } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        openModal: state.ui.modal,
        formType: 'Create Post',
        currentUser: state.entities.users[state.session.id],
        postProfileId: postProfileId
    })
}

const mDTP = (dispatch) => {
    return ({
        // otherForm: () => dispatch(openModal('Create Post')),
        otherForm: (modal) => dispatch(openModal(modal)),
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal()),
        fetchUsers: () => dispatch(fetchAllUsers())
    })
}

export default withRouter(connect(mSTP, mDTP)(PostForm))