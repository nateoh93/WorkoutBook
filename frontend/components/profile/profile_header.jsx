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
        this.clickFile = this.clickFile.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    clickFile(field) {
        return(e) => {
            if (field === 'upload-cover-btn') {
                // debugger
                $('.upload-cover-btn').click();
            } else {
                // debugger
                $('.upload-prof-btn').click();
            }
        }
        
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
                        // formData.append(`id`, this.props.match.params.userId)
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
        return(
            <div className='profile-header'>
                <div className='profile-cover-photo'><img src={`${this.props.user.coverPhoto}`} alt=""/></div>
                <div className='camera-icon'></div>
                <div className='cover-photo-btn-container'>
                    <div className='cover-photo-btn' onClick={this.clickFile('upload-cover-btn')}>Update Cover Photo
                        <input className='upload-cover-btn' type="file" onChange={this.handleFile('cover_photo')}/>
                    </div>

                    <div className='profile-photo-container'><img className='prof-pic-img' src={`${this.props.user.profilePhoto}`} alt=""/></div>
                    
                    <div className='profile-photo-btn' onClick={this.clickFile('upload-prof-btn')}>Update
                        <input className='upload-prof-btn' type="file" onChange={this.handleFile('profile_photo')}/>
                    </div>
                </div>
                <p className='profile-header-name'>{this.props.user.fname} {this.props.user.lname}</p>
            </div>
        );
    }
}

export default ProfileHeader;