import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component{
  render(){
    return (
      <li>
        {this.props.children} 
        <span className='delete' onClick={this.props.delUser}>x</span>
      </li>
    )
  }
}


function mapStateToProps(state) {
    return {
        stateFromReducer: state.adduser
    };
}

const UserConnected = connect(mapStateToProps)(User);
export default UserConnected;