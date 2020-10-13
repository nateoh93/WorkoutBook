import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return ({
        errors: errors.session,
        formType: 'Log In',
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button className='button-create' onClick={() => dispatch(openModal('Sign Up'))}>
                Create New Account
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
