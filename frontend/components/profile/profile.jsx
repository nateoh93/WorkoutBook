import React from 'react';
import ProfileHeaderContainer from './profile_header_container'
import ProfileNav from './profile_nav';
import ProfileBioContainer from './profile_bio_container'
import EditProfileContainer from './edit_profile_container';

class Profile extends React.Component {
    render() {
        return(
            <div className='profile-page'>
                <div className='profile-info-container'>
                    <ProfileHeaderContainer/>
                    <ProfileNav />
                    <ProfileBioContainer/>
                    <EditProfileContainer/>
                </div>
            </div>
        );
    }
}

export default Profile;