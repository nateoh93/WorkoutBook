import { connect } from 'react-redux';
import Profile from './profile';
import {fetchAllUsers, fetchFriends, fetchUser} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        friends: state.entities.friends,
        user: state.entities.users[ownProps.match.params.userId]
    };
};

const mapDispatchToProps = dispatch => {
    // debugger
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);