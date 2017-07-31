import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user.js'
import * as actions from './actions/actions'

class UsersList extends Component{
  render(){
    return(
      <ul id='userList'>
         {
          this.props.stateFromReducer.map(function(user){
            return <User key={user.id} > {user.name} </User>
          })
        } 
      </ul>
    )
  }
}



function mapStateToProps(state) {
    return {
        stateFromReducer: state.adduser
    };
}

const UsersListConnected = connect(mapStateToProps)(UsersList);
export default UsersListConnected;