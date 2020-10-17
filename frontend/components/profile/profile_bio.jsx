import React from 'react';
import FriendsInfoContainer from './friends_container'

class ProfileBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            birthday: '',
            bio: '',
            city: '',
            school: '',
            work: ''
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
            .then( () => {
                return this.setState({
                    birthday: this.props.user.birthday,
                    bio: this.props.user.bio,
                    city: this.props.user.city,
                    school: this.props.user.school,
                    work: this.props.user.work
                })
            })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user !== this.props.user) {
            return this.setState({
                birthday: this.props.user.birthday,
                bio: this.props.user.bio,
                city: this.props.user.city,
                school: this.props.user.school,
                work: this.props.user.work
            })
        }
    }

    render () {
        return (
            <>
                <div className='profile-bio-container'>
                    <div className='profile-intro-icon'></div>
                    <h3>Intro</h3>
                    <p>{this.state.bio}</p>
                    <ul className='profile-bio-list'>
                        <li>Born on <font>{this.state.birthday}</font></li>
                        <li>Lives in <font>{this.state.city}</font></li>
                        <li>Studied at <font>{this.state.school}</font></li>
                        <li>Works as a <font>{this.state.work}</font></li>
                    </ul>
                    <ul className='profile-bio-icons'>
                        <div className='heart-icon'></div>
                        <div className='school-icon'></div>
                        <div className='house-icon'></div>
                        <div className='work-icon'></div>
                    </ul>
                </div>

                <div className='profile-photos-container'>
                    <div className='profile-photos-icon'></div>
                    <h3>Photos</h3>
                    <p>No photos to display</p>
                </div>

                <FriendsInfoContainer friendIds={this.props.friendIds}/>
            </>
        );
    }
}

export default ProfileBio;