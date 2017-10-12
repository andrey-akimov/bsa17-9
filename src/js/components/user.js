import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

class User extends Component {
    render() {
        return (
            <li>
                {this.props.children}
                <span className="delete" onClick={() => this.props.onDeleteUser(this.props.children[1])}>
                    x
                </span>
            </li>
        );
    }
}

// >>>>Сделать это в UserList.js!<<<<
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(undefined, mapDispatchToProps)(User);
