import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null,
        }
        this.handleFile = this.handleFile.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleFile(field) {
        return(e) => {
            let file = e.target.files[0];
            // debugger
            
            const fileReader = new FileReader();

            // fileReader.onloadend = () => {
                // debugger
                this.setState({photoFile: file, photoUrl: null}, () => {
                    const formData = new FormData();
                    if (this.state.photoFile) {
                        formData.append(`user[${field}]`, file)
                        formData.append(`id`, this.props.match.params.userId)
                        // debugger
                        this.props.updateUser(formData)
                    }
                })
            // }

            // if (file) {
            //     fileReader.readAsDataURL(file);
            // }
    
        }
        // debugger
    }

    render() {
        // console.log(this.props.user)
        console.log('this is profile header component')
        return(
            <div className='profile-header'>
                <div className='profile-cover-photo'><img src={`${this.props.user.coverPhoto}`} alt=""/></div>
                <div className='cover-photo-btn'>Update Cover Photo
                    <input className='upload-btn' type="file" onChange={this.handleFile('cover_photo')}/>
                </div>
                <p className='profile-header-name'>{this.props.user.fname} {this.props.user.lname}</p>
            </div>
        );
    }
}

export default ProfileHeader;