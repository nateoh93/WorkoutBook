import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <div>
                    <button className='post-menu-btn-icon'></button>
                    <ul className='post-menu-dropdown-list'>
                        <li>Edit</li>
                        <li>Delete</li>
                    </ul>
                </div>
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