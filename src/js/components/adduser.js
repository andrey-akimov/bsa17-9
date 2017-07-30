import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddUser extends Component{
  constructor(){
    super();
    this.addUser = this.addUser.bind(this);
  }

  addUser(){
    if(this.refs.input.value != ''){
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

  render(){
    return(
      <div id='input-form'>
        <input type='text' ref='input' />
        <button onClick={this.addUser}>Send</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state.adduser
  }),
  dispatch => ({
    onAddUser: (userName) => {
      dispatch({ type: 'ADD_USER', payload: userName });
    }
  })
)(AddUser);