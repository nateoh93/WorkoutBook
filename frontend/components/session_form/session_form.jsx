import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            birthday: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.displaySignupName = this.displaySignupName.bind(this);
        this.displaySignupBirthday = this.displaySignupBirthday.bind(this);
        this.displaySignupHeader = this.displaySignupHeader.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {email: 'demo@squat.com', password: 'password'};
        this.props.processForm(demoUser);
    }

    displaySignupName() {
        if (this.props.formType === 'Sign Up') {
            return(<div className='signup-names'>
                <input type="text"
                    onChange={this.update('fname')}
                    value={this.state.fname}
                    className={this.props.errors.fname ? 'login-input errors' : 'login-input'}
                    placeholder='First name'
                />
                <div className='error-messages' id="fname">{this.props.errors.fname}</div>
                <input type="text"
                    onChange={this.update('lname')}
                    value={this.state.lname}
                    className={this.props.errors.lname ? 'login-input errors' : 'login-input'}
                    placeholder='Last name'
                />
                <div className='error-messages' id='lname'>{this.props.errors.lname}</div>
            </div>)
        }
    }

    displaySignupBirthday() {
        if (this.props.formType === 'Sign Up') {
            return(<>
                <label className='birthday'>Birthday</label>
                <input type="date"
                    onChange={this.update('birthday')}
                    value={this.state.birthday}
                    className={this.props.errors.birthday ? 'login-input errors' : 'login-input'}
                />
                <div className='error-messages'>{this.props.errors.birthday}</div>
                
            </>)
        }
    }

    displaySignupHeader() {
        if (this.props.formType === 'Sign Up') {
            return (
                <div className='signup-header'>
                    <h1>Sign Up</h1>
                    <h3>It's quick and easy.</h3>
                    <div className="signup-border"></div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="login-form-container">
                {this.displaySignupHeader()}

                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.formType === 'Sign Up' ? <span onClick={this.props.closeModal} className="close-x">&times;</span> : null}
                    <div className="login-form">
                        {this.displaySignupName()}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className={((this.props.errors.email && !this.props.openModal) || (this.props.errors.login && !this.props.openModal)) ? 'login-input errors' : 'login-input'}
                            placeholder='Email'
                        />
                        {(this.props.formType === 'Log In' && this.props.openModal) ? null : <div className='error-messages'>{this.props.errors.email}</div>}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className={((this.props.errors.password && !this.props.openModal) || (this.props.errors.login && !this.props.openModal)) ? 'login-input errors' : 'login-input'}
                            placeholder='Password'
                        />
                        {(this.props.formType === 'Log In' && this.props.openModal) ? null : <div className='error-messages'>{this.props.errors.password}</div>}

                        <div className='error-messages'>{this.props.errors.login}</div>
                        
                        {this.displaySignupBirthday()}
                        <button className="session-submit" type="submit">{this.props.formType}</button>
                    </div>
                </form>
                {this.props.formType === 'Log In' ? <button className="demo-button" onClick={this.handleDemo}>Demo User</button> : null}
                <div className="border"></div>
                {this.props.formType === 'Log In' ? this.props.otherForm : null}
            </div>
        );
    }
}

export default withRouter(SessionForm);
