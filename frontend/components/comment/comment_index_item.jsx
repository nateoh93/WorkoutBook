import React from 'react';
import { Link } from 'react-router-dom';

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
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        // if (prevProps.comment.body !== this.props.comment.body) {
        //     this.props.fetchPost(this.props.post.id)
        // }
    }

    destroyComment(e) {
        e.preventDefault();
        // debugger
        this.props.deleteComment(this.props.comment)
    }

    displayDropdownMenu() {
        // debugger
        if (this.props.currentUser.id === this.props.comment.comment_author_id || this.props.currentUser.id === this.props.postProfile.id) {
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

    changeComment() {
        // debugger
        this.setState({edit: true})
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        // debugger
        const formData = new FormData();
        formData.id = this.props.comment.id;
        formData.append('comment[body]', this.state.body);

        this.props.updateComment(formData)
        this.setState({
            edit: false,
            
        })
    }


    render() {
        // debugger
        let commentDisplay;
        this.state.edit === true ? commentDisplay = <input className='comment-body' type="text"
            onChange={this.update('body')}
            value={this.state.body}
            onKeyPress={ e => {
                if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit();}
            }
            }
        /> : commentDisplay = <div className='comment-body'>{this.state.body}</div>
    

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
                </div>
                {this.displayDropdownMenu()}
            </li>
        );
    }
}

export default CommentIndexItem