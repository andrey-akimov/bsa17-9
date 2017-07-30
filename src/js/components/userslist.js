import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user.js'

class UsersList extends Component{
  render(){
    return(
      <ul id='userList'>
         {
          this.props.testStore.map(function(user){
            return <User key={user.id} > {user.name} </User>
          })
        } 
      </ul>
    )
  }
}

export default connect(
  state => ({
    testStore: state.adduser
  }),
  dispatch => ({})
)(UsersList);