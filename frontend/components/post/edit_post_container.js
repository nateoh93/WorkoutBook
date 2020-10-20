import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form'
import {openModal, closeModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return ({
        openModal: state.ui.modal,
        // formType: 'Update Post',
        post: state.entities.posts[ownProps.id],
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = (dispatch) => {
    return ({
        // otherForm: () => dispatch(openModal('Update Post')),
        otherForm: (modal) => dispatch(openModal(modal)),
        action: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal()),
        updatePost: (post) => dispatch(updatePost(post))
    })
}

export default withRouter(connect(mSTP, mDTP)(EditPostForm))