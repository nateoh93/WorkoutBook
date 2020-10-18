import React from 'react';
import { withRouter } from 'react-router-dom';
import EditProfileContainer from './edit_profile_container';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photoFile: null,
            photoUrl: null,
        }
        this.handleFile = this.handleFile.bind(this);
        this.clickFile = this.clickFile.bind(this);
        this.openModal = this.openModal.bind(this);
        this.displayUpdateInfo = this.displayUpdateInfo.bind(this);
        this.displayUploadCoverPhoto = this.displayUploadCoverPhoto.bind(this);
        this.displayUploadProfilePhoto = this.displayUploadProfilePhoto.bind(this);
    }

    clickFile(field) {
        return(e) => {
            if (field === 'upload-cover-btn') {
                $('.upload-cover-btn').click();
            } else {
                $('.upload-prof-btn').click();
            }
        }
        
    }

    handleFile(field) {
        return(e) => {
            let file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                this.setState({photoFile: file, photoUrl: null})
                const formData = new FormData();
                if (this.state.photoFile) {
                    formData.append(`user[${field}]`, file)
                    this.props.updateUser(formData)
                }
            }

            if (file) {
                fileReader.readAsDataURL(file);
            }
    
        }
    }

    openModal() {
        this.props.otherForm('Update Info')
    }

    displayUpdateInfo() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <button className='update-info-btn' onClick={this.openModal}>Update Info</button>                
            )
        } else {
            null
        }
    }

    displayUploadCoverPhoto() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='cover-photo-btn-container'>
                        <div className='camera-icon-cover' onClick={this.clickFile('upload-cover-btn')}></div>
                    <div className='cover-photo-btn' onClick={this.clickFile('upload-cover-btn')}>Update Cover Photo
                        <input className='upload-cover-btn' type="file" onChange={this.handleFile('cover_photo')} />
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    displayUploadProfilePhoto() {
        if (this.props.currentUser.id === this.props.user.id) {
            return (
                <div className='profile-photo-btn-container'>
                    <div className='profile-photo-btn' onClick={this.clickFile('upload-prof-btn')}>Update
                        <div className='camera-icon-prof'></div>
                        <input className='upload-prof-btn' type="file" onChange={this.handleFile('profile_photo')} />
                    </div>
                </div>
            )
        } else {
            null
        }
    }

    render() {

        const renderCoverPhoto = (this.props.user.coverPhoto) ? <img src={`${this.props.user.coverPhoto}`} /> : <img src='https://i.stack.imgur.com/l60Hf.png'/>
        const renderProfilePhoto = (this.props.user.profilePhoto) ? <img className='prof-pic-img' src={`${this.props.user.profilePhoto}`} /> : <img className='prof-pic-img' src='https://i.stack.imgur.com/l60Hf.png'/>

        return(
            <div className='profile-header'>

                <div className='profile-cover-photo'>{renderCoverPhoto}</div>
                {this.displayUploadCoverPhoto()}
                <div className='profile-photo'>{renderProfilePhoto}</div>
                {this.displayUploadProfilePhoto()}
                
                <p className='profile-header-name'>{this.props.user.fname} {this.props.user.lname}</p>
                {this.displayUpdateInfo()}
            </div>
        );
    }
}

export default ProfileHeader;