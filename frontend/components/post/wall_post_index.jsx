import React from 'react';
import PostIndexItem from './post_index_item'
import PostIndexItemContainer from './post_index_item_container'

class WallPostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.postProfile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postProfile.id !== this.props.postProfile.id) {
            this.props.fetchPosts(this.props.postProfile.id)
        }
    }

    render() {
        const postIndexList = this.props.posts.reverse().map( post => {
            return <PostIndexItemContainer key={post.id} 
                post={post} 
                // deletePost={this.props.deletePost}
                // currentUser={this.props.currentUser}
                // postProfile={this.props.postProfile}
                // otherForm={this.props.otherForm}
                // users={this.props.users}
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
