import React from 'react';
import { Link } from 'react-router-dom';

class NewsFeedBirthday extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='newsfeed-right'>

                Birthdays go here
                <div className='copyright'>&copy; Nathan Oh 2020</div>
            </div>
        );
    }
}

export default NewsFeedBirthday;