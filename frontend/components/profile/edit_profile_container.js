import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditProfileForm from './edit_profile_form';
import {fetchUser, updateUserInfo} from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        user: state.entities.users[state.session.id],
        // errors: state.errors.session,
        openModal: state.ui.modal,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        updateUserInfo: (user) => {
            return dispatch(updateUserInfo(user))
        },
        otherForm: () => dispatch(openModal('Update Info')),
        closeModal: () => dispatch(closeModal()),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfileForm))
