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
            let newUser = {
                name: this.refs.input.value,
                id: Date.now()
            };
            this.props.onAddUser(newUser);
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state.adduser
    };
}

const AddUserConnected = connect(mapStateToProps, mapDispatchToProps)(AddUser);
export default AddUserConnected;
