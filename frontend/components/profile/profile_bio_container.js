import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import ProfileBio from './profile_bio';

const mSTP = (state, ownProps) => {
    // debugger
    return({
        user: state.entities.users[ownProps.match.params.userId],
        friendships: state.entities.friendships,
        users: state.entities.users
    })
}

const mDTP = dispatch => {
    // debugger
    return({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    })
}

export default withRouter(connect(mSTP, mDTP)(ProfileBio))