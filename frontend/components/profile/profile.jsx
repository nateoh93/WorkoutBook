import React from 'react';
import ProfileHeaderContainer from './profile_header_container'

class Profile extends React.Component {
    render() {
        return(
            <div>
                <div className='profile-info-container'>
                    <ProfileHeaderContainer/>
                </div>
            </div>
        );
    }
}

export default Profile;