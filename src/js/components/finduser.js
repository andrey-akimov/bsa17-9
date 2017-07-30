import React, { Component } from 'react'
import { connect } from 'react-redux'


class FindUser extends Component{
  constructor(){
    super();
    this.findUser = this.findUser.bind(this);
  }

  findUser(){
    // if(this.refs.search.value != ''){
      // console.log(this.refs.search.value);
      this.props.onFindUser(this.refs.search.value)
      // let user = {
      //   name: this.refs.search.value,
      //   id: Date.now()
      // };
      // this.props.onFindUser(user);
      // this.refs.search.value = '';
    // } else {
    //   return false;
    // }
  }

  render(){
    return(
      <div id='search-form'>
        <input type='text' ref='search' onChange={this.findUser} />
        <button>Find</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    cons: console.log('i`m from findUser', state.adduser.filter(user => user.name.includes(state.filteruser))),
    testStore: state.adduser.filter(user => user.name.includes(state.filteruser))
  }),
  dispatch => ({
    onFindUser: (userName) => {
      dispatch({ type: 'FIND_USER', payload: userName });
    }
  })
)(FindUser);