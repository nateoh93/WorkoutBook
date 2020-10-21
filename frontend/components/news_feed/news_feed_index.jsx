import React from 'react';
import CreatePostContainer from '../post/create_post_container';

class NewsFeedIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchAllUsers()
    // }
    
    render() {
        return (
            <div className='newsfeed-main'>
                <div className='news-feed-post-form-container'>
                    <CreatePostContainer />
                </div>
            </div>
        );
    }
}

export default NewsFeedIndex;