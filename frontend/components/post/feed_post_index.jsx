import React from 'react';
import PostIndexItem from './post_index_item'
import PostIndexItemContainer from './post_index_item_container';

class FeedPostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
        // this.allNewsFeedPosts - this.allNewsFeedPosts.bind(this);
    }

    componentDidMount() {
        // maybe send down array of friendIds (including currentUsers id)
        // and then in the post controller do a .where {id: params[array of ids]}

        // this.props.fetchPosts('all').then( () => {
        //     return this.setState({
        //         posts: this.props.posts
        //     })
        // })
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.postProfile.id !== this.props.postProfile.id) {
        //     this.props.fetchPosts(this.props.postProfile.id)
        // }
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
                return <PostIndexItemContainer key={post.id}
                    post={post}
                    // deletePost={this.props.deletePost}
                    // currentUser={this.props.currentUser}
                    // postProfile={this.props.postProfile}
                    // otherForm={this.props.otherForm}
                    // users={this.props.users}
                />
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
