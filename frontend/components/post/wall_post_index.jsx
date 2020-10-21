import React from 'react';
import PostIndexItem from './post_index_item'

class WallPostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPosts(this.props.postProfile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.postProfile.id !== this.props.postProfile.id) {
            this.props.fetchPosts(this.props.postProfile.id)
        }
    }

    // displayPostsList() {
    //     if ()
    // }

    render() {
        const postIndexList = this.props.posts.reverse().map( post => {
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
