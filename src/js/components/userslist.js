import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import * as actions from './actions/actions';

class UsersList extends Component {
    render() {
        return (
            <ul id="userList">
                {this.props.addUser.map(function(user) {
                    return <User key={user.id}> {user.name} </User>;
                })}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        addUser: state.addUser
    };
}

export default connect(mapStateToProps)(UsersList);
