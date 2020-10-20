import React from 'react';
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        // this.props.fetchPosts(this.props.postProfile.id)
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        // if (prevProps.postProfile.id !== this.props.postProfile.id) {
        //     this.props.fetchPosts(this.props.postProfile.id)
        // }
    }

    render() {
        // debugger
        const CommentIndexList = this.props.comments.map(comment => {
            return <CommentIndexItem key={comment.id}
                comment={comment}
                deleteComment={this.props.deleteComment}
                updateComment={this.props.updateComment}
                currentUser={this.props.currentUser}
                users={this.props.users}
                postProfile={this.props.postProfile}
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