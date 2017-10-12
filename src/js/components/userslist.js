import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import * as actions from './actions/actions';

class UsersList extends Component {
    render() {
        return (
            <ul id="userList">
                {this.props.users.map(function(user) {
                    return <User key={user.id}> {user.name} </User>;
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.filter(user => user.name.toLowerCase().includes(state.findUser))
});

export default connect(mapStateToProps)(UsersList);
