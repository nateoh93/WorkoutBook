import React from 'react';

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            bio: '',
            city: '',
            school: '',
            work: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        // this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .then(() => {
                return this.setState({
                    bio: this.props.user.bio,
                    city: this.props.user.city,
                    school: this.props.user.school,
                    work: this.props.user.work
                })
            })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        // this.props.updateUser(user).then(this.props.closeModal)
        this.props.updateUserInfo(user)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>About Me
                    <textarea cols="30" rows="10" onChange={this.update('bio')} value={this.state.bio}></textarea>
                </label>
                <label>Current City
                    <input type="text" onChange={this.update('city')} value={this.state.city}/>
                </label>
                <label>Education
                    <input type="text" onChange={this.update('school')} value={this.state.school}/>
                </label>
                <label>Profession
                    <input type="text" onChange={this.update('work')} value={this.state.work}/>
                </label>
                <button>Update Info</button>
            </form>
        );
    }
}

export default EditProfileForm;