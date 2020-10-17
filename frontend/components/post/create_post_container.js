import {connect} from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import { fetchAllUsers } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    debugger
    return ({
        openModal: state.ui.modal,
        formType: 'Create Post',
        currentUser: state.entities.users[state.session.id],
        user: state.entities.users[ownProps.match.params.userId]
    })
}

const mDTP = (dispatch) => {
    return ({
        otherForm: () => dispatch(openModal('Create Post')),
        createPost: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal()),
        fetchusers: () => dispatch(fetchAllUsers())
    })
}

export default withRouter(connect(mSTP, mDTP)(PostForm))