import React from 'react';
import ProfileHeaderContainer from './profile_header_container'
import ProfileNav from './profile_nav';
import ProfileBioContainer from './profile_bio_container'
import WallPostIndexContainer from '../post/wall_post_index_container'
import CreatePostContainer from '../post/create_post_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers()
    }

    render() {
        if (Object.values(this.props.users).length < 2) {
            return (<div></div>)
        } else {

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
                                <div className='profile-right-post'>
                                    <CreatePostContainer/>
                                </div>

                                <WallPostIndexContainer />
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Profile;