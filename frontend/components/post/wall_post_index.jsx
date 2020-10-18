import React from 'react';
import PostIndexItem from './post_index_item'

class WallPostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postProfile !== this.props.postProfile) {
            this.props.fetchPosts(this.props.postProfile.id)
        }
    }

    render() {
        const postIndexList = this.props.posts.map( post => {
            return <PostIndexItem key={post.id} 
                post={post} 
                deletePost={this.props.deletePost}
                currentUser={this.props.currentUser}
                postProfile={this.props.postProfile}
                otherForm={this.props.otherForm}
                users={this.props.users}
                />
        })

        return(
            <ul className='wallpost-index'>
                {postIndexList}
            </ul>
        );
    }
}

export default WallPostIndex