import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user.js'

//key={user.id}
class UsersList extends Component{
  render(){
    return(
      <ul id='userList'>
         {
          this.props.testStore.map(function(user, index){
            return <User key={index} > {user} </User>
          })
        } 
      </ul>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(UsersList);