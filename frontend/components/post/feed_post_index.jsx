import React from 'react';
import PostIndexItem from './post_index_item'
import PostIndexItemContainer from './post_index_item_container';

class FeedPostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
    }

    render() {
        if (this.props.posts.length === 0) {
            return null;
        } else {
            let allPosts = [];
            this.props.userFriends.push(this.props.currentUser);
            this.props.userFriends.forEach( user => {
                this.props.posts.forEach( post => {
                    if (post.post_author_id === user.id) {
                        allPosts.push(post);
                    };
                });
            });
    
            const postIndexList = allPosts.reverse().map(post => {
            // const postIndexList = this.state.posts.reverse().map(post => {
                return <PostIndexItemContainer key={post.id} post={post} />
            });
            return (
                <ul className='wallpost-index'>
                    {postIndexList}
                </ul>
            );
        };
    };
};

export default FeedPostIndex
