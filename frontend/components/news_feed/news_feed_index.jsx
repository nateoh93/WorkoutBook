import React from 'react';
import CreatePostContainer from '../post/create_post_container';
import FeedPostIndexContainer from '../post/feed_post_index_container';

class NewsFeedIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className='newsfeed-main'>
                <div className='news-feed-post-form-container'>
                    <CreatePostContainer />
                    <FeedPostIndexContainer />
                </div>
            </div>
        );
    }
}

export default NewsFeedIndex;