import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from './session_form/login_form_container'

class Splash extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div className="splash-header">
                        <h1 className='splash-logo'>Workoutbook</h1>
                        <h2 className='splash-title'>Connect with friends and the world around you on Workoutbook.</h2>
                    </div>
                    <LoginFormContainer />
                </header>
                <footer>
                        <div className='copyright'>&copy; Nathan Oh 2020</div>
                        <div className='footer-links'>
                            <a target="_blank" href="https://www.linkedin.com/in/nathan-oh-cpa-8062075a/">LinkedIn</a>
                            <a target="_blank" href="https://github.com/nateoh93">GitHub</a>
                            <a target="_blank" href="https://github.com/nateoh93/WorkoutBook">Workoutbook Repo</a>
                        </div>
                </footer>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    null
)(Splash);