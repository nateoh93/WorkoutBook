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
    }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
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

        // this.props.updateUserInfo(user).then(this.props.closeModal)
        this.props.updateUserInfo(user).then(this.props.closeModal).then(this.props.history.push(`/users/${this.props.user.id}`))
    }

    render() {
        return (
            <form className='update-info-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x update-form">&times;</span>
                <h3>Edit Profile </h3>
                <label>About Me</label>
                <textarea  onChange={this.update('bio')} value={this.state.bio}></textarea>
                <label>Current City</label>
                <input type="text" onChange={this.update('city')} value={this.state.city}/>
                <label>Education</label>
                <input type="text" onChange={this.update('school')} value={this.state.school}/>
                <label>Profession</label>
                <input type="text" onChange={this.update('work')} value={this.state.work}/>
                <button>Update Info</button>
            </form>
        );
    }
}

export default EditProfileForm;