import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/session_actions';
import ProfileHeader from './profile_header';
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        openModal: state.ui.modal,
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => {
        return dispatch(updateUser(user))
    },
    otherForm: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHeader));