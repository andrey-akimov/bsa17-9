import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUser from './AddUser';
import FindUser from './FindUser';
import UsersList from './UsersList';

class App extends Component {
    render() {
        return (
            <div>
                <AddUser />
                <FindUser />
                <UsersList />
            </div>
        );
    }
}

export default App;
