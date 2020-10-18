import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.destroyPost = this.destroyPost.bind(this);
    }

    destroyPost(e) {
        e.preventDefault();
        debugger
        this.props.deletePost(this.props.post.id)
    }
    

    render() {
        return (
            <li>
                <div>
                    <button className='post-menu-btn-icon'></button>
                    <ul className='post-menu-dropdown-list'>
                        <li><button className='post-menu-dropdown-btn'>Edit</button></li>
                        <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
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