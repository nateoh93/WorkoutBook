// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { updatePost } from '../../actions/post_actions';
// import PostForm from './post_form';
// import {openModal, closeModal} from '../../actions/modal_actions'

// const mSTP = (state, ownProps) => {
//     return ({
//         openModal: state.ui.modal,
//         formType: 'Update Post',
//         post: state.entities.posts[ownProps.match.params.postId],
//         currentUser: state.entities.users[state.session.id],
//     })
// }

// const mDTP = (dispatch) => {
//     return ({
//         otherForm: () => dispatch(openModal('Update Post')),
//         action: (post) => dispatch(updatePost(post)),
//         closeModal: () => dispatch(closeModal()),
//     })
// }

// export default withRouter(connect(mSTP, mDTP)(PostForm))