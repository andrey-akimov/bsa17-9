import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from './user.js'
import * as actions from './actions/actions'

class UsersList extends Component{
  constructor(){
    super();
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(user){
    // console.log(user);
    // let userId = user.id;
    // this.props.onDeleteUser(userId);

    let userId = user.id;
    let newArr = this.props.stateFromReducer.filter(function(user){
      return user.id != userId;
    });
    console.log(newArr);
    // this.setState({ users: newArr });
    this.props.onDeleteUser(newArr);
  }

  render(){
    let onDeleteUser = this.deleteUser;
    return(
      <ul id='userList'>
         {
          this.props.stateFromReducer.map(function(user){
            return <User key={user.id} delUser={onDeleteUser.bind(null, user)} > {user.name} </User>
          })
        } 
      </ul>
    )
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

const UsersListConnected = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersListConnected;