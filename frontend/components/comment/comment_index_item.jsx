import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.destroyComment = this.destroyComment.bind(this);
        // this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        // this.displayPostAuthor = this.displayPostAuthor.bind(this);
    }

    destroyComment(e) {
        e.preventDefault();
        // debugger
        this.props.deleteComment(this.props.comment.id)
    }

    displayDropdownMenu() {
        // debugger
        //consider whether to allow the profileUser to also delete / edit posts that are on his profile
        // if (this.props.currentUser.id === this.props.post.post_author_id || this.props.currentUser.id === this.props.postProfile.id) {
        //     if (this.props.currentUser.id === this.props.post.post_author_id) {
        //         return (
        //             <>
        //                 <button className='post-menu-btn-icon'></button>
        //                 <ul className='post-menu-dropdown-list'>
        //                     <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.props.post.id)}>Edit</button></li>
        //                     <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
        //                 </ul>
        //             </>
        //         )
        //     } else {
        //         return (
        //             <>
        //                 <button className='post-menu-btn-icon'></button>
        //                 <ul className='post-menu-dropdown-list'>
        //                     <li><button className='post-menu-dropdown-btn' onClick={this.destroyPost}>Delete</button></li>
        //                 </ul>
        //             </>
        //         )
        //     }
        // }
    }

    render() {
        debugger
        return (
            <li>
                <Link to={`/users/${this.props.comment.comment_author_id}`}>
                    <img className='comment-author-pic' src={this.props.users[this.props.comment.comment_author_id].profilePhoto} />
                </Link>
                <div className='comment-index-item-container'>
                    <div className='comment-name'>
                        <Link to={`/users/${this.props.comment.comment_author_id}`}>
                            {this.props.users[this.props.comment.comment_author_id].fname} {this.props.users[this.props.comment.comment_author_id].lname}
                        </Link>
                    </div>
                    <div className='comment-body'>{this.props.comment.body}</div>
                </div>
            </li>
        );
    }
}

export default CommentIndexItem