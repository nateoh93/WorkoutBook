import React from 'react';
import { Link } from 'react-router-dom';

class NewsFeedLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='newsfeed-left'>

                <div className='feed-profile-photo'>
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <img className='feed-pic' src={this.props.currentUser.profilePhoto} />
                        {this.props.currentUser.fname} {this.props.currentUser.lname}
                    </Link>
                </div>

                <li className='feed-home-button'><Link to='/feed'>News Feed</Link></li>

                <div className='newsfeed-outside-links'>Shortcuts
                    <a href="https://www.linkedin.com/in/nathan-oh-cpa-8062075a/"><i class="fab fa-linkedin"></i>LinkedIn</a>
                    <a href="https://github.com/nateoh93"><i class="fab fa-github"></i>GitHub</a>
                    <a href="https://github.com/nateoh93/WorkoutBook"><i class="fas fa-code-branch"></i>Workoutbook Repo</a>
                    
                </div>

            </div>
        );
    }
}

export default NewsFeedLink;