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
        this.props.fetchUser(this.props.user.id)
    }

    handleFile(field) {
        // debugger
        return(e) => {
            let file = e.currentTarget.files[0];
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                this.setState({photoFile: file, photoUrl: fileReader.result})
            }

            if (file) {
                fileReader.readAsDataURL(file);
            }
    
            const formData = new FormData();
            if (this.state.photoFile) {
                formData.append(`user[${field}]`, this.state.photoFile)
                this.props.updateUser(formData)
            }
        }
        // debugger
    }

    render() {
        console.log(this.props.user)
        
        return(
            <div>
                <div className='profile-cover-photo'><img src={`${this.props.user.coverPhoto}`} alt=""/></div>
                <div className='cover-photo-btn'>Update Cover Photo
                    <input className='upload-btn' type="file" onChange={this.handleFile('cover_photo')}/>
                </div>

            </div>
        );
    }
}

export default withRouter(ProfileHeader);