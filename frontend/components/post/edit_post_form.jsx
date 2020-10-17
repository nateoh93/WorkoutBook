// import React from 'react';

// class PostForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             body: '',
//             photoFile: null,
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.update = this.update.bind(this);
//         this.handleFile = this.handleFile.bind(this);
//     }

//     handleFile(e) {
//         const file = e.currentTarget.files[0];
//         const fileReader = new FileReader();
//         fileReader.onloadend = () => {
//             this.setState({ photoFile: file });
//         };
//         if (file) {
//             fileReader.readAsDataURL(file);
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('post[body]', this.state.body)
//         // formData.append('post[body]', this.state.body)
//         // formData.append('post[body]', this.state.body)

//         if (this.state.photoFile) {
//             formData.append(`user[post_photo]`, this.state.photoFile)
//             // this.props.updatePost(formData)
//             // this.props.createPost(formData)
//         }
//     }

//     update(field) {
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <textarea onChange={this.update('body')} value={this.state.body}></textarea>
//                     <input type="file" onChange={this.handleFile} />
//                     <button>Create Post</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default PostForm;