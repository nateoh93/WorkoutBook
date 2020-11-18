import { connect } from 'react-redux';

import { logout, fetchUser } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
        users: Object.values(users)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);