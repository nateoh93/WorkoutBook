import { connect } from 'react-redux';

import {  } from '../../actions/session_actions';
import {  } from '../../actions/modal_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = dispatch => ({
    // return ({null})
});

export default connect(
    mapStateToProps,
    null
)(NewsFeed);