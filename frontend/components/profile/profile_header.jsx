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
        this.renderCoverPhoto = this.renderCoverPhoto.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
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

            // fileReader.onloadend = () => {
                this.setState({photoFile: file, photoUrl: null}, () => {
                    const formData = new FormData();
                    if (this.state.photoFile) {
                        formData.append(`user[${field}]`, file)
                        this.props.updateUser(formData)
                    }
                })
            // }

            // if (file) {
            //     fileReader.readAsDataURL(file);
            // }
    
        }
    }

    renderCoverPhoto() {
        // debugger
        return () => {
            if (this.props.user.coverPhoto) {
            <img src={`${this.props.user.coverPhoto}`} />
        } else {
            <img src='https://i.stack.imgur.com/l60Hf.png'/>
        }
    }
    }

    render() {

        const renderCoverPhoto = (this.props.user.coverPhoto) ? <img src={`${this.props.user.coverPhoto}`} /> : <img src='https://i.stack.imgur.com/l60Hf.png'/>
        const renderProfilePhoto = (this.props.user.profilePhoto) ? <img className='prof-pic-img' src={`${this.props.user.profilePhoto}`} /> : <img className='prof-pic-img' src='https://i.stack.imgur.com/l60Hf.png'/>

        return(
            <div className='profile-header'>
                {/* <div className='profile-cover-photo'><img src={`${this.props.user.coverPhoto}`}/></div> */}
                <div className='profile-cover-photo'>{renderCoverPhoto}</div>
                <div className='camera-icon-cover' onClick={this.clickFile('upload-cover-btn')}></div>
                <div className='cover-photo-btn-container'>
                    <div className='cover-photo-btn' onClick={this.clickFile('upload-cover-btn')}>Update Cover Photo
                        <input className='upload-cover-btn' type="file" onChange={this.handleFile('cover_photo')}/>
                    </div>

                    <div className='profile-photo-container'>{renderProfilePhoto}</div>
                    
                    <div className='profile-photo-btn' onClick={this.clickFile('upload-prof-btn')}>Update
                        <div className='camera-icon-prof'></div>
                        <input className='upload-prof-btn' type="file" onChange={this.handleFile('profile_photo')}/>
                    </div>
                </div>
                <p className='profile-header-name'>{this.props.user.fname} {this.props.user.lname}</p>
                {/* <EditProfileContainer /> */}
            </div>
        );
    }
}

export default ProfileHeader;