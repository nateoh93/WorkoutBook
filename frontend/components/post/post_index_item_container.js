import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions'
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import { fetchPost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    // debugger
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        // users: state.entities.users,
        // currentUser: state.entities.users[state.session.id],
        // postProfile: state.entities.users[ownProps.match.params.userId]
        // postProfile: state.entities.users[postProfileId]
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        fetchPost: (postId) => dispatch(fetchPost(postId))
    })
}

export default withRouter(connect(mSTP, mDTP)(PostIndexItem))






// DELETE AFTER MAKING SURE IT'S NOT USED ANYWHERE