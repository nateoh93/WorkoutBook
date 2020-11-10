import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deletePost, fetchPosts } from '../../actions/post_actions';
import { getUserFriends } from '../../reducers/selectors';
import FeedPostIndex from './feed_post_index'

const mSTP = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id

    return ({
        userFriends: getUserFriends(state, postProfileId),
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        postProfile: state.entities.users[postProfileId]
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    })
}

export default withRouter(connect(mSTP, mDTP)(FeedPostIndex))