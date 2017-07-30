import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddUser from './adduser.js'
import UsersList from './userslist.js'


class App extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     users: []
  //   }
  //   this.pushUser = this.pushUser.bind(this);
  //   this.handleUserDelete = this.handleUserDelete.bind(this);
  // }

  // pushUser(newUser){
  //   let arr = this.state.users.slice();
  //   arr.push(newUser);
  //   this.setState({ users: arr });
  // }

  // handleUserDelete(user){
  //   let userId = user.id;
  //   let newUsers = this.state.users.filter(function(user) {
  //     return user.id !== userId;
  //   });
  //   this.setState({ users: newUsers });
  // }

  render(){
    console.log(this.props.testStore);
    return(
      <div>
        <AddUser />
        <UsersList /> 
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);