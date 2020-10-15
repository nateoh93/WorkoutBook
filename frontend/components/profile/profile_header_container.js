import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/session_actions';
import ProfileHeader from './profile_header';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => {
        // debugger
        return dispatch(updateUser(user))
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileHeader));