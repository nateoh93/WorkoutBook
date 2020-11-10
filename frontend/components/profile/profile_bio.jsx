import React from 'react';
import FriendsInfo from './friends_info'

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
        if (prevProps.user.id !== this.props.user.id || 
            prevProps.user.bio !== this.props.user.bio || prevProps.user.city !== this.props.user.city ||
            prevProps.user.school !== this.props.user.school || prevProps.user.work !== this.props.user.work) {
            this.props.fetchUser(this.props.user.id)
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
    }

    render () {
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.state.birthday.slice(5, 7) - 1];
        let year = this.state.birthday.slice(0, 4);
        let day = this.state.birthday.slice(8, 10);
        

        return (
            <>
                <div className='profile-bio-container'>
                    <div className='profile-intro-icon'></div>
                    <h3>Intro</h3>
                    <p>{this.state.bio}</p>
                    <ul className='profile-bio-list'>
                        <li>
                            <div className='birth-icon'></div>
                            Born on <font>{month} {day}, {year}</font></li>
                        <li>
                            <div className='house-icon'></div>
                            Lives in <font>{this.state.city}</font></li>
                        <li>
                            <div className='school-icon'></div>
                            Studied at <font>{this.state.school}</font></li>
                        <li>
                            <div className='work-icon'></div>
                            Works as a <font>{this.state.work}</font></li>
                    </ul>
                </div>

                <div className='profile-photos-container'>
                    <div className='profile-photos-icon'></div>
                    <h3>Photos</h3>
                    <p>No photos to display</p>
                </div>

                <FriendsInfo 
                    friendships={this.props.userFriends}
                    users={this.props.users}/>
            </>
        );
    }
}

export default ProfileBio;