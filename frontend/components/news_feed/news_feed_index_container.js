import { connect } from 'react-redux';
import NewsFeedIndex from './news_feed_index';

const mapStateToProps = (state) => {
    return {
        // currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllUsers: () => dispatch(fetchAllUsers())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeedIndex);