import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.post.body,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();

        this.props.updatePost(this.state).then(this.props.closeModal)

        this.setState({
            body: '',
            photoFile: null,
            photoUrl: null,
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return (
            <form className='update-post-form' onSubmit={this.handleSubmit}>
                <span onClick={this.props.closeModal} className="close-x update-form">&times;</span>
                <h3>Edit Post </h3>
                <textarea  onChange={this.update('body')} value={this.state.body}></textarea>
                <button>Save</button>
            </form>
        );
    }
}

export default EditPostForm;