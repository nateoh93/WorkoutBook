import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            post_id: null,
            comment_author_id: this.props.currentUser.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        // this.props.fetchUsers()
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();

        let newComment = Object.assign({}, this.state);
        newComment['post_id'] = this.props.post.id;
        this.props.createComment(newComment);

        this.setState({body: ''});
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {

        return(
            <div className='comment-form-container'>
                <img src={this.props.currentUser.profilePhoto}/>
                <form onSubmit={this.handleSubmit} className='comment-form'>
                    <input type="text" 
                        placeholder='Write a comment...' 
                        value={this.state.body}
                        onChange={this.update('body')}
                        // onKeyPress={this.handleSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default CommentForm;