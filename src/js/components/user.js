import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

class User extends Component {
    constructor() {
        super();
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(user) {
        let name = user;
        let newState = this.props.addUser.filter(function(user) {
            return user.name != name;
        });
        this.props.onDeleteUser(newState);
    }

    render() {
        return (
            <li>
                {this.props.children}
                <span className="delete" onClick={e => this.deleteUser(this.props.children[1])}>
                    x
                </span>
            </li>
        );
    }
}

// >>>>Сделать это в UserList.js!<<<<
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        addUser: state.addUser
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
