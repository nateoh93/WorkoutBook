import React from 'react';

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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);

        this.setState({
            email: '',
            password: '',
            fname: '',
            lname: '',
            birthday: ''
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let signupInfo;
        if (this.props.formType === 'Sign Up') {
            signupInfo = (<div>
                <label>
                    <input type="text" 
                        onChange={this.update('fname')} 
                        value={this.state.fname}
                        placeholder='First name'
                    />
                </label>
                <br/>
                <label>
                    <input type="text" 
                        onChange={this.update('lname')} 
                        value={this.state.lname}
                        placeholder='Last name'
                    />
                </label>
                <br/>
                <label>Birthday
                    <input type="date" onChange={this.update('birthday')} value={this.state.birthday}/>
                </label>
            </div>)
        }

        let signupHeader = (
            <div>
                <h1>Sign Up</h1>
                <p>It's quick and easy.</p>
            </div>
        )
        return (
            <div className="login-form-container">
                {this.props.formType === 'Sign Up' ? signupHeader : null}

                <form onSubmit={this.handleSubmit} className="login-form-box">

                    <div className="login-form">
                        <br />
                        <label>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                placeholder='Email'
                            />
                        </label>
                        <br />
                        <label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder='Password'
                            />
                        </label>
                        <br />
                        {signupInfo}
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <br/>
                    {this.renderErrors()}
                    {this.props.navLink}
                </form>
            </div>
        );
    }
}

export default SessionForm;
