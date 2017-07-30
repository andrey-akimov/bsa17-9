import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddUser extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     user: ''
  //   }
  //   this.pushUser = this.pushUser.bind(this);
  //   this.onTextChange = this.onTextChange.bind(this);
  // }

  // pushUser(){
  //   if(this.state.user != ''){
  //     let newUser = {
  //       name: this.state.user,
  //       id: Date.now()
  //     };
  //     this.props.onUserAdd(newUser);
  //     this.setState({ user: '' });
  //   } else {
  //     return false;
  //   }
  // }

  // onTextChange(e) {
  //   this.setState({ user: e.target.value });
  // }

  addTrack(){
    this.props.onAddTrack(this.refs.input.value);
    this.refs.input.value = '';
  }

  render(){
    return(
      <div id='input-form'>
        <input type='text' ref='input' />
        <button onClick={this.addTrack.bind(this)}>Send</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(AddUser);