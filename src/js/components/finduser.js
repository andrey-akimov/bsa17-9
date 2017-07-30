import React, { Component } from 'react'
import { connect } from 'react-redux'


class FindUser extends Component{
  constructor(){
    super();
    this.findUser = this.findUser.bind(this);
  }

  findUser(){
    this.props.onFindUser(this.refs.search.value)
  }

  render(){
    return(
      <div id='search-form'>
        <input type='text' ref='search' onChange={this.findUser} placeholder='Find user' />
      </div>
    )
  }
}

export default connect(
  state => ({
    // cons: console.log(state.adduser.filter(user => user.name.includes(state.filteruser))),
    testStore: state.adduser.filter(user => user.name.includes(state.filteruser))
  }),
  dispatch => ({
    onFindUser: (userName) => {
      dispatch({ type: 'FIND_USER', payload: userName });
    }
  })
)(FindUser);