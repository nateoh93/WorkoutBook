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
    }

    componentDidMount() {
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

        this.setState({
            email: '',
            password: '',
            fname: '',
            lname: '',
            birthday: ''
        })
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {email: 'demo@squat.com', password: 'password'};
        this.props.processForm(demoUser);
    }

    render() {
        let signupInfo;
        if (this.props.formType === 'Sign Up') {
            signupInfo = (<>
                <input type="text" 
                    onChange={this.update('fname')} 
                    value={this.state.fname}
                    placeholder='First name'
                />
                {this.props.errors.fname}
                <input type="text" 
                    onChange={this.update('lname')} 
                    value={this.state.lname}
                    placeholder='Last name'
                />
                {this.props.errors.lname}
                <label>Birthday
                    <input type="date" 
                        onChange={this.update('birthday')} 
                        value={this.state.birthday}
                    />
                    {this.props.errors.birthday}
                </label>
            </>)
        }

        let signupHeader = (
            <div className='signup-header'>
                <h1>Sign Up</h1>
                <h3>It's quick and easy.</h3>
                <div className="signup-border"></div>
            </div>
        )
        return (
            <div className="login-form-container">
                {this.props.formType === 'Sign Up' ? signupHeader : null}

                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.props.formType === 'Sign Up' ? <span onClick={this.props.closeModal} className="close-x">X</span> : null}
                    <div className="login-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            placeholder='Email'
                        />
                        {this.props.errors.email}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                            placeholder='Password'
                        />
                        {this.props.errors.password}
                        {signupInfo}
                        <div className='error-messages'>
                            {this.props.errors.login}
                        </div>
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
