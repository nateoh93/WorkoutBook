import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container'
import CommentIndexContainer from '../comment/comment_index_container';

class PostIndexItem extends React.Component{
    constructor(props) {
        super(props);
        // this.state = this.props.post
        this.destroyPost = this.destroyPost.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        this.displayPostAuthor = this.displayPostAuthor.bind(this);
        this.focusComment = this.focusComment.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevProps.post.commentIds.length !== this.props.post.commentIds.length) {
        //     this.props.fetchPost(this.props.postProfile.id)
        // }
    }

    destroyPost(e) {
        e.preventDefault();
        // debugger
        this.props.deletePost(this.props.post.id)
        // this.props.deletePost(this.state.id)
    }
    
    displayDropdownMenu() {
        // debugger
        //consider whether to allow the profileUser to also delete / edit posts that are on his profile
        if (this.props.currentUser.id === this.props.post.post_author_id || this.props.currentUser.id === this.props.postProfile.id) {
        // if (this.props.currentUser.id === this.state.post_author_id || this.props.currentUser.id === this.props.postProfile.id) {
            // if (this.props.currentUser.id === this.state.post_author_id) {
            if (this.props.currentUser.id === this.props.post.post_author_id) {
                return (
                    <>
                        <button className='post-menu-btn-icon'></button>
                        <ul className='post-menu-dropdown-list'>
                            <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.props.post.id)}>Edit</button></li>
                            {/* <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.state.id)}>Edit</button></li> */}
                            <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                        </ul>
                    </>
                )    
            } else {
                return (
                    <>
                        <button className='post-menu-btn-icon'></button>
                        <ul className='post-menu-dropdown-list'>
                            <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
                        </ul>
                    </>
                )
            }
        }
    }


    displayPostAuthor() {
        debugger
        
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        month = month[this.props.post.created_at.slice(5, 7) - 1];
        // month = month[this.state.created_at.slice(5, 7) - 1];
        let year = this.props.post.created_at.slice(0, 4);
        // let year = this.state.created_at.slice(0, 4);
        let day = this.props.post.created_at.slice(8, 10);
        // let day = this.state.created_at.slice(8, 10);

        let hour = this.props.post.created_at.slice(11, 13)
        // let hour = this.state.created_at.slice(11, 13)
        let min = this.props.post.created_at.slice(13, 16)
        // let min = this.state.created_at.slice(13, 16)
        let time;

        if (hour < 1) {
            hour = 12;
            time = `${hour}${min} AM`;
        } else if (hour > 12) {
            hour = hour % 12;
            time = `${hour}${min} PM`;
        } else {
            time = `${hour}${min} AM`;
        }
        
        const postAuthor = this.props.users[this.props.post.post_author_id]
        // const postAuthor = this.props.users[this.state.post_author_id]
        return (
            <div className='post-author-container'>
                <Link to={`/users/${postAuthor.id}`}><img className='post-author-pic' src={postAuthor.profilePhoto} /></Link>
                <div className='post-author-time-container'>
                    {postAuthor.id === this.props.postProfile.id ? <div className='post-author'><Link to={`/users/${postAuthor.id}`}>{postAuthor.fname} {postAuthor.lname}</Link></div>
                        : <div className='post-author'><Link to={`/users/${postAuthor.id}`}>{postAuthor.fname} {postAuthor.lname}</Link> ▸ <Link to={`/users/${this.props.postProfile.id}`}>{this.props.postProfile.fname} {this.props.postProfile.lname}</Link></div>}
                    <div className='post-time'>{month} {day}, {year} at {time}</div>
                </div>
                    {this.displayDropdownMenu()}
            </div>
        )
    }

    focusComment(e) {
        e.preventDefault();
        document.getElementById(`comment-form-input-id-${this.props.post.id}`).focus();
        // document.getElementById(`comment-form-input-id-${this.state.id}`).focus();
    }

    render() {
        return (
            <li>
                {this.displayPostAuthor()}
                
                <div className='wallpost-body'>{this.props.post.body}</div>
                {/* <div className='wallpost-body'>{this.state.body}</div> */}
                <img className='wallpost-photos' src={this.props.post.postPhoto} />
                {/* <img className='wallpost-photos' src={this.state.postPhoto} /> */}
                <div className='like-comment-container'>
                    <div><i className="fas fa-thumbs-up likebtn"></i>Like</div>
                    <div onClick={this.focusComment}><i className="far fa-comment-alt"></i>Comment</div>
                </div>

                <CommentIndexContainer post={this.props.post}/>
                {/* <CommentIndexContainer post={this.state}/> */}
                <CommentFormContainer post={this.props.post}/>
                {/* <CommentFormContainer post={this.state}/> */}
            </li>
        );
    }
}

export default PostIndexItem