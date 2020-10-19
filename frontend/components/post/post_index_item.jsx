import React from 'react';
import { Link } from 'react-router-dom'

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props)
        this.destroyPost = this.destroyPost.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        this.displayPostAuthor = this.displayPostAuthor.bind(this);
    }

    destroyPost(e) {
        e.preventDefault();
        // debugger
        this.props.deletePost(this.props.post.id)
    }
    
    displayDropdownMenu() {
        // debugger
        //consider whether to allow the profileUser to also delete / edit posts that are on his profile
        // if (this.props.currentUser.id === this.props.post.post_author_id || this.props.currentUser.id === this.props.postProfile.id) {

        if (this.props.currentUser.id === this.props.post.post_author_id) {
            return(
                <>
                    <button className='post-menu-btn-icon'></button>
                    <ul className='post-menu-dropdown-list'>
                        <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.props.post.id)}>Edit</button></li>
                        <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                    </ul>
                </>
            )
        }
    }

    displayPostAuthor() {
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.props.post.updated_at.slice(5, 7) - 1];
        let year = this.props.post.updated_at.slice(0, 4);
        let day = this.props.post.updated_at.slice(8, 10);

        let time = this.props.post.updated_at.slice(11, 16)
        console.log(this.props.post.updated_at)
        
        const postAuthor = this.props.users[this.props.post.post_author_id]
        return (
            <div className='post-author-container'>
                <Link to={`/users/${postAuthor.id}`}><img className='post-author-pic' src={postAuthor.profilePhoto} /></Link>
                <div className='post-author-time-container'>
                    <div className='post-author'><Link to={`/users/${postAuthor.id}`}>{postAuthor.fname} {postAuthor.lname}</Link></div>
                    <div className='post-time'>{month} {day}, {year} at {time}</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <li>
                {this.displayPostAuthor()}
                <div>
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