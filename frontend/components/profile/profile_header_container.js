import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/session_actions';
import ProfileHeader from './profile_header';

const mapStateToProps = (state) => {
    return {
        user: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHeader);