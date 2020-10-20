import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.destroyComment = this.destroyComment.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        // this.displayPostAuthor = this.displayPostAuthor.bind(this);
    }

    destroyComment(e) {
        e.preventDefault();
        // debugger
        this.props.deleteComment(this.props.comment)
    }

    displayDropdownMenu() {
        debugger
        if (this.props.currentUser.id === this.props.comment.comment_author_id || this.props.currentUser.id === this.props.postProfile.id) {
            if (this.props.currentUser.id === this.props.comment.comment_author_id) {
                return (
                    <>
                        <button className='comment-menu-btn-icon'></button>
                        <ul className='comment-menu-dropdown-list'>
                            {/* <li><button className='post-menu-dropdown-btn' onClick={() => this.props.otherForm('Update Post', this.props.post.id)}>Edit</button></li> */}
                            <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete</button></li>
                        </ul>
                    </>
                )
            } else {
                return (
                    <>
                        <button className='comment-menu-btn-icon'></button>
                        <ul className='comment-menu-dropdown-list'>
                            <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete</button></li>
                        </ul>
                    </>
                )
            }
        }
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
                {this.displayDropdownMenu()}
            </li>
        );
    }
}

export default CommentIndexItem