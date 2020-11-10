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
            return <PostIndexItemContainer key={post.id} post={post} />
        })

        return(
            <ul className='wallpost-index'>
                {postIndexList}
            </ul>
        );
    }
}

export default WallPostIndex
