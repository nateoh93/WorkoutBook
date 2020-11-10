import React from 'react';
import { Link } from 'react-router-dom';
import Like from '../likes/like'

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            body: this.props.comment.body
        }
        this.destroyComment = this.destroyComment.bind(this);
        this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
        this.changeComment = this.changeComment.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.displayLikes = this.displayLikes.bind(this);
    }

    toggleLike(e) {
        e.preventDefault();

        let newLike = {
            likeable_type: "Comment",
            likeable_id: this.props.comment.id
        };
        let toggle = false;
        this.props.likes.forEach(like => {
            if (like.author_id === this.props.currentUser.id) {
                newLike = like;
                toggle = true;
            }
        })

        if (toggle) {
            this.props.deleteLike(newLike);
        } else {
            this.props.createLike(newLike);
        }
    }

    displayLikes() {
        let liked = false;
        this.props.likes.forEach(like => {
            if (like.author_id === this.props.currentUser.id) {
                liked = true;
            }
        })



        if (this.props.likes.length !== undefined) {
            return <Like currentUser={this.props.currentUser}
                liked={liked}
                likes={this.props.likes}
                type='Comment'
            />
        } else {
            return null
        }
    }

    destroyComment(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment)
    }

    displayDropdownMenu() {
        // if (this.props.currentUser.id === this.props.comment.comment_author_id || this.props.currentUser.id === this.props.postProfile.id) {
            if (this.props.currentUser.id === this.props.comment.comment_author_id) {
                return (
                    <>
                        <button className='comment-menu-btn-icon'></button>
                        <ul className='comment-menu-dropdown-list'>
                            <li><button className='comment-menu-dropdown-btn' onClick={this.changeComment}>Edit</button></li>
                            <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete</button></li>
                        </ul>
                    </>
                )
            } else if (this.props.currentUser.id === this.props.post.post_author_id){
                return (
                    <>
                        <button className='comment-menu-btn-icon'></button>
                        <ul className='comment-menu-dropdown-list'>
                            <li><button className='comment-menu-dropdown-btn' onClick={this.destroyComment}>Delete</button></li>
                        </ul>
                    </>
                )
            }
        // }
    }

    changeComment(e) {
        // e.preventDefault();
        this.setState({edit: true})

        // document.getElementById(`comment-edit-input-id-${this.props.comment.id}`).focus();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.id = this.props.comment.id;
        formData.append('comment[body]', this.state.body);

        this.props.updateComment(formData)
        this.setState({
            edit: false,
            
        })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({edit: false})
    }


    render() {
        let commentDisplay;
        this.state.edit === true ? commentDisplay = 
            <>
                <input className='comment-body' type="text"
                    onChange={this.update('body')}
                    value={this.state.body}
                    onKeyPress={ e => {
                        if (e.key === 'Enter') {
                        e.preventDefault();
                        this.handleSubmit();}
                    }}
                />
                {/* <button onClick={this.setState({edit: false})}>Cancel</button> */}
            </> : commentDisplay = <div className='comment-body'>{this.state.body}</div>
    

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

                    {commentDisplay}

                    {this.state.edit === true ? 
                        <div className='cancel-edit-comment'
                            // id={`comment-edit-input-id-${this.props.comment.id}`}
                            onClick={this.handleCancel}>Cancel</div> : null}

                </div>

                {this.displayLikes()}
                
                <div className='like-comment-btn' onClick={this.toggleLike}>Like</div>
                {this.displayDropdownMenu()}
            </li>
        );
    }
}

export default CommentIndexItem