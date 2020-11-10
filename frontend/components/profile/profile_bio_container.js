import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import { getUserFriends } from '../../reducers/selectors';
import ProfileBio from './profile_bio';

const mSTP = (state, ownProps) => {
    const postProfileId = ownProps.match.params.userId || state.session.id
    
    return({
        user: state.entities.users[ownProps.match.params.userId],
        userFriends: getUserFriends(state, postProfileId),
        users: state.entities.users,
    })
}

const mDTP = dispatch => {
    return({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
    })
}

export default withRouter(connect(mSTP, mDTP)(ProfileBio))