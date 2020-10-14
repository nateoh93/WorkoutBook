import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
        formType: 'Log In',
        openModal: state.ui.modal,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        otherForm: () => dispatch(openModal('Sign Up')),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
