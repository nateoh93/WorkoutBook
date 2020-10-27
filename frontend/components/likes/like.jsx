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

        // debugger

        if (this.props.type === 'Post') {
            if (amount === 0) {
                text = null;
                likeBtn = null;
            } else if (amount === 1 && liked === true) {
                text = <div className='like-amount'>You</div>;
            } else if (amount === 1 && liked === false) {
                text = <div className='like-amount'>1 other</div>;
            } else if (amount > 1 && liked === true) {
                text = <div className='like-amount'>You and {this.props.likes.length-1} others</div>;
            } else if (amount > 1 && liked === false) {
                text = <div className='like-amount'>{this.props.likes.length} others</div>
            }
        } else {
            if (amount === 0) {
                text = null;
                likeBtn = null;
            } else {
                text = <div className='like-amount-comment'>{amount}</div>;
                // text = <div className='like-amount'>{amount}</div>;
                likeBtn = <div className='like-icon-blue-comment'></div>
            }

        }


        // debugger
        return(
            <>
                {this.props.type === 'Post' ? <div className='display-like-count'>
                    {text}
                    {likeBtn}
                    </div> : <div className='display-like-count-comment'>
                        {text}
                        {likeBtn}
                        </div>
                }            
            </>
        );
    }
}

export default Like;