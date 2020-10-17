import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/session_actions';
import ProfileHeader from './profile_header';
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        openModal: state.ui.modal,
        current_user: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => {
        return dispatch(updateUser(user))
    },
    otherForm: () => dispatch(openModal('Update Info')),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHeader));