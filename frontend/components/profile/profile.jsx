import React from 'react';
import ProfileHeaderContainer from './profile_header_container'
import ProfileNav from './profile_nav';
import ProfileBioContainer from './profile_bio_container'

class Profile extends React.Component {
    //consider fetching all user info here. then passing it down to each container as its own props.
    // that way you don't have to keep calling componentdidmount() and fetch user. looks like there are multiple
    //queries to fetch data.

    render() {
        // const userData = this.props.fetchUser(this.props.match.params.userId)
        // debugger
        return(
            <div className='profile-page'>
                <div className='profile-info-container'>
                    <ProfileHeaderContainer/>
                    <ProfileNav />
                    <ProfileBioContainer />
                </div>
            </div>
        );
    }
}

export default Profile;