import React from 'react';
import PostIndexItem from './post_index_item'

class WallPostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPosts();
    }

    render() {
        const postIndexList = this.props.posts.map( post => {
            return <PostIndexItem key={post.id} post={post} />
        })

        return(
            <ul className='wallpost-index'>
                {postIndexList}
            </ul>
        );
    }
}

export default WallPostIndex