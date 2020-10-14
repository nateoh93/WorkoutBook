import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container'

class Splash extends React.Component {
    render() {
        return (
            <header>
                <div className="splash-header">
                    <h1 className='splash-logo'>workoutbook</h1>
                    <h2 className='splash-title'>Connect with friends and the world around you on Workoutbook.</h2>
                </div>
                <LoginFormContainer />
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

// const mapDispatchToProps = dispatch => ({
//     // return ({null})
// });

export default connect(
    mapStateToProps,
    null
)(Splash);