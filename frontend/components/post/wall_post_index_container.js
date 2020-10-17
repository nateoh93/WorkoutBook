import { connect } from 'react-redux';
import {  } from '../../actions/post_actions';
import WallPostIndex from './post_form';
import { openModal, closeModal } from '../../actions/modal_actions'
import {  } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // debugger
    // const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        // openModal: state.ui.modal,
        // formType: 'Create Post',
        // currentUser: state.entities.users[state.session.id],
        // postProfileId: postProfileId
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        // otherForm: () => dispatch(openModal('Create Post')),
        // createPost: (post) => dispatch(createPost(post)),
        // closeModal: () => dispatch(closeModal()),
        // fetchusers: () => dispatch(fetchAllUsers())
    })
}

export default withRouter(connect(mSTP, mDTP)(WallPostIndex))