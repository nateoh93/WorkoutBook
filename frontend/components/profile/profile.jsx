import React from 'react';
import ProfileHeaderContainer from './profile_header_container'
import ProfileNav from './profile_nav';
import ProfileBioContainer from './profile_bio_container'
import CreatePostContainer from '../post/create_post_container';
import WallPostIndexContainer from '../post/wall_post_index_container'

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
                    <div className='profile-bottom'>
                        <div className='profile-left'>
                            <ProfileBioContainer />
                        </div>
                        <div className='profile-right'>
                            <CreatePostContainer/>
                            <WallPostIndexContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;