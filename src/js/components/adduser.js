import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/actions';

class AddUser extends Component {
    constructor() {
        super();
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        if (this.refs.input.value != '') {
            this.props.onAddUser(this.refs.input.value);
            this.refs.input.value = '';
        } else {
            return false;
        }
    }

    render() {
        return (
            <div id="input-form">
                <input type="text" ref="input" placeholder="Add new user" />
                <button onClick={this.addUser}>Add</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(undefined, mapDispatchToProps)(AddUser);
