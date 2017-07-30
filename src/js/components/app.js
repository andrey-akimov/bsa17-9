import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddUser from './adduser.js'
import FindUser from './finduser.js'
import UsersList from './userslist.js'


class App extends Component{
  // handleUserDelete(user){
  //   let userId = user.id;
  //   let newUsers = this.state.users.filter(function(user) {
  //     return user.id !== userId;
  //   });
  //   this.setState({ users: newUsers });
  // }

  render(){
    // console.log(this.props.testStore.adduser);
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