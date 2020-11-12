import React from 'react';

class ProfileNav extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        return(
            <div>
                <ul className='profile-nav'>
                    {/* <li>Timeline</li>
                    <li>About</li>
                    <li>Friends</li>
                    <li>Photos</li>
                    <li>Archive</li>
                    <li>More</li> */}
                </ul>
            </div>
        );
    }
}

export default ProfileNav;