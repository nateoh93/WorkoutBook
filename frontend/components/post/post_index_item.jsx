import React from 'react';

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.destroyPost = this.destroyPost.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
    }

    destroyPost(e) {
        e.preventDefault();
        // debugger
        this.props.deletePost(this.props.post.id)
    }
    
    displayDropdownMenu() {
        // debugger
        if (this.props.currentUser.id === this.props.post.post_author_id || this.props.currentUser.id === this.props.postProfile.id) {
            return(
                <>
                    <button className='post-menu-btn-icon'></button>
                    <ul className='post-menu-dropdown-list'>
                        <li><button className='post-menu-dropdown-btn'>Edit</button></li>
                        <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                    </ul>
                </>
            )
        }
    }

    render() {
        return (
            <li>
                <div>
                    {/* <button className='post-menu-btn-icon'></button>
                    <ul className='post-menu-dropdown-list'>
                        <li><button className='post-menu-dropdown-btn'>Edit</button></li>
                        <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                    </ul> */}
                    {this.displayDropdownMenu()}
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