import React from 'react';

class Like extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        let text;
        let likeBtn = <div className='like-icon-blue'></div>

        const amount = this.props.likes.length;
        const liked = this.props.liked

        // const display = { amount = this.props.likes.length, liked: this.props.liked}

        debugger

        if (amount === 0) {
            text = null;
            likeBtn = null;
        } else if (amount === 1 && liked === true) {
            text = <div className='like-amount'>{this.props.currentUser.fname} {this.props.currentUser.lname}</div>;
        } else if (amount === 1 && liked === false) {
            text = <div className='like-amount'>1 other</div>;
        } else if (amount > 1 && liked === true) {
            text = <div className='like-amount'>You and {this.props.likes.length} others</div>;
        } else if (amount > 1 && liked === false) {
            text = <div className='like-amount'>{this.props.likes.length} others</div>
        }

        // debugger
        return(
            <div className='display-like-count'>
                {text}
                {likeBtn}
            </div>
        );
    }
}

export default Like;