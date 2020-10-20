import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form'

const mSTP = (state, ownProps) => {
    // debugger

    return ({
        currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.post.id]
    })
}

const mDTP = (dispatch) => {
    // debugger
    return ({
        createComment: (comment) => dispatch(createComment(comment))
    })
}

export default connect(mSTP, mDTP)(CommentForm)