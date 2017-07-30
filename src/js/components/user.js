import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component{
  render(){
    return (
      <li>
        {this.props.children} 
        <span className='delete' onClick={this.props.onDelete}>x</span>
      </li>
    )
  }
}

export default connect(
  state => ({
    testStore: state.adduser
  }),
  dispatch => ({})
)(User);