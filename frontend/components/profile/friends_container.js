import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import FriendsInfo from './friends_info';

const mSTP = (state, ownProps) => {
    return ({
        // user: state.entities.users[ownProps.match.params.userId]
    })
}

const mDTP = dispatch => {
    return ({
        // fetchUser: (userId) => dispatch(fetchUser(userId))
    })
}

export default withRouter(connect(mSTP, mDTP)(FriendsInfo))