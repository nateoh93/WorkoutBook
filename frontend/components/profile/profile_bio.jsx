import React from 'react';
// import FriendsInfoContainer from './friends_container'
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
        // debugger
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
                        <li>Born on <font>{month} {day}, {year}</font></li>
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

                {/* <FriendsInfoContainer friendIds={this.props.user.friendIds} users={this.props.users}/> */}
                <FriendsInfo friendsIds={this.props.user.friendIds} 
                    users={this.props.users}/>
            </>
        );
    }
}

export default ProfileBio;