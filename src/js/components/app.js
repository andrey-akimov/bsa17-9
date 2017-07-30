import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddUser from './adduser.js'
import FindUser from './finduser.js'
import UsersList from './userslist.js'


class App extends Component{

  render(){
    return(
      <div>
        <AddUser />
        <FindUser />
        <UsersList /> 
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state.adduser
  }),
  dispatch => ({})
)(App);