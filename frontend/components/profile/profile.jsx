import React from 'react';
import ProfileHeaderContainer from './profile_header_container'
import ProfileNav from './profile_nav';

class Profile extends React.Component {
    render() {
        return(
            <div className='profile-page'>
                <div className='profile-info-container'>
                    <ProfileHeaderContainer/>
                    <ProfileNav />
                </div>
            </div>
        );
    }
}

export default Profile;