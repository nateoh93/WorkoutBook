import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';

import { fetchAllUsers } from '../../actions/session_actions';
import NewsFeed from './news_feed';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchPosts: (wallId) => dispatch(fetchPosts(wallId))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeed);