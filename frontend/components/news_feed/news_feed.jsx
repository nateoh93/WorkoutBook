import React from 'react';
import NewsFeedBirthday from './news_feed_birthday';
import NewsFeedIndexContainer from './news_feed_index_container';
import NewsFeedLink from './news_feed_link';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllUsers()
        this.props.fetchPosts('all')
    }
    render() {
        return (
            <div className='newsfeed-page'>
                <div className='newsfeed-container'>
                    <NewsFeedLink currentUser={this.props.currentUser}/>

                    <NewsFeedIndexContainer />

                    <NewsFeedBirthday />

                </div>
            </div>
        );
    }
}

export default NewsFeed;