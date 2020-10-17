import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <div className='wallpost-body'>{this.props.post.body}</div>
                <img className='wallpost-photos' src={this.props.post.postPhoto} />
                <div className='like-comment-container'>
                    <div>Like</div>
                    <div>Comment</div>
                </div>
            </li>
        );
    }
}

export default PostIndexItem