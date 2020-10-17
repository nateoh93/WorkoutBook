import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            photoFile: null,
            // profile_user_id: this.props.user.id,
            // post_author_id: this.props.currentUser.id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body)
        formData.append('post[profile_user_id]', this.state.profile_user_id)
        formData.append('post[post_author_id]', this.state.post_author_id)

        if (this.state.photoFile) {
            formData.append(`user[post_photo]`, this.state.photoFile)
            this.props.createPost(formData)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render() {
        return(
            <div className='profile-right-post'>
                <h3>Create Post</h3>
                <div className='post-form-container'>
                    <form className='create-post-form' onSubmit={this.handleSubmit}>
                        <textarea onChange={this.update('body')} value={this.state.body}></textarea>
                        <input type="file" onChange={this.handleFile}/>
                        <button>Create Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostForm;