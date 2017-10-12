import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class User extends Component {
    render() {
        return (
            <li>
                {this.props.children}
                <span className="delete" onClick={() => this.props.onDeleteUser(this.props.children)}>
                    x
                </span>
            </li>
        );
    }
}

export default User;
