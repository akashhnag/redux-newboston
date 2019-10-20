import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/UserList'
import UserDetails from './containers/UserDetails';
function App() {
  return (
    <div className="App">
      <div>
        <h2>User names</h2>
        <UserList></UserList>
        <hr />
        <h2>User Details</h2>
        <UserDetails></UserDetails>
      </div>
    </div>
  );
}

export default App;
