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
                        <div className='newsfeed-name'>{this.props.currentUser.fname} {this.props.currentUser.lname}</div>
                    </Link>
                </div>

                <div className='feed-link'>
                    <div className='feed-home-button'><Link to='/feed'>News Feed</Link></div>
                    <div className='feed-home-icon'></div>
                </div>

                <div className='newsfeed-outside-links'>
                    <h1>Shortcuts</h1>
                    <a href="https://www.linkedin.com/in/nathan-oh-cpa-8062075a/"><div className='link-container'>
                        <div className='link-name'>LinkedIn</div>
                        <i className="fab fa-linkedin link-icon"></i>
                    </div></a>

                    <a href="https://github.com/nateoh93"><div className='link-container'>
                        <div className='link-name'>GitHub</div>
                        <i className="fab fa-github link-icon"></i>
                    </div></a>

                    <a href="https://github.com/nateoh93/WorkoutBook"><div className='link-container'>
                        <div className='link-name'>Workoutbook Repo</div>
                        <i className="fas fa-code-branch link-icon"></i>
                    </div></a>
                </div>

            </div>
        );
    }
}

export default NewsFeedLink;