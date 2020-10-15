import React from 'react';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }
    
    componentDidMount() {
        this.props.fetchUser(this.props.user.id).then(user => {this.setState({user})})
    }

    render() {
        return(
            <div>
                <div className='profile-cover-photo'><img src={`${this.props.user.coverPhoto}`} alt=""/></div>
                <div>Update Cover Photo
                    <input type="file"/>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;