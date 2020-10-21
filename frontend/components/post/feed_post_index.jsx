import React from 'react';
import PostIndexItem from './post_index_item'

class FeedPostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts
        };
        // this.allNewsFeedPosts - this.allNewsFeedPosts.bind(this);
    }

    componentDidMount() {
        // debugger
        // maybe send down array of friendIds (including currentUsers id)
        // and then in the post controller do a .where {id: params[array of ids]}

        // this.props.fetchPosts('all').then( () => {
        //     return this.setState({
        //         posts: this.props.posts
        //     })
        // })
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        // if (prevProps.postProfile.id !== this.props.postProfile.id) {
        //     this.props.fetchPosts(this.props.postProfile.id)
        // }
    }

    // allNewsFeedPosts() {
    //     debugger
    //     const allPosts = []
        
    //     this.props.newsFeedUsers.forEach (user => {
    //         this.state.posts.forEach( post => {
    //             if (post.post_author_id === user.id) {
    //                 allPosts.push(post);
    //             }
    //         })
    //     })

    //     return allPosts;
    // }

    render() {
        debugger
        if (this.props.posts.length === 0) {
            return null;
        } else {
            let allPosts = [];
            debugger
            this.props.newsfeedUsers.forEach( user => {
                // debugger
                this.props.posts.forEach( post => {
                    // debugger
                    if (post.post_author_id === user.id) {
                        allPosts.push(post);
                    };
                });
            });
    
            const postIndexList = allPosts.reverse().map(post => {
            // const postIndexList = this.state.posts.reverse().map(post => {
                debugger
                return <PostIndexItem key={post.id}
                    post={post}
                    deletePost={this.props.deletePost}
                    currentUser={this.props.currentUser}
                    postProfile={this.props.postProfile}
                    otherForm={this.props.otherForm}
                    users={this.props.users}
                />
            });
            debugger
            return (
                <ul className='wallpost-index'>
                    {postIndexList}
                </ul>
            );
        };
    };
};

export default FeedPostIndex
