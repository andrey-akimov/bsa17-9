import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from './User';
import * as actions from './actions/actions';

class UsersList extends Component {
    render() {
        return (
            <ul id="userList">
                {this.props.users.map(user => {
                    return (
                        <User onDeleteUser={this.props.onDeleteUser} key={user.id}>
                            {user.name}
                        </User>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.filter(user => user.name.toLowerCase().includes(state.findUser))
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
