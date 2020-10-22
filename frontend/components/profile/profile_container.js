import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchFriends, fetchUser} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        friends: state.entities.friendships,
        user: state.entities.users[ownProps.match.params.userId],
        users: state.entities.users
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile));