import React from 'react';
import CommentIndexItem from './comment_index_item';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchPosts(this.props.postProfile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.postProfile.id !== this.props.postProfile.id) {
        //     this.props.fetchPosts(this.props.postProfile.id)
        // }
    }

    render() {
        const CommentIndexList = this.props.comments.map(comment => {
            return <CommentIndexItemContainer key={comment.id}
                comment={comment}
                // deleteComment={this.props.deleteComment}
                // updateComment={this.props.updateComment}
                // currentUser={this.props.currentUser}
                // users={this.props.users}
                // postProfile={this.props.postProfile}
                // fetchPost={this.props.fetchPost}
                post={this.props.post}
            />
        })

        return (
            <ul className='comment-index'>
                {CommentIndexList}
            </ul>
        );
    }
}

export default CommentIndex