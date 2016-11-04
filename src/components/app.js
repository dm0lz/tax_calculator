import React from 'react';
import UserList from '../containers/user-list.js';
import UserDetail from '../containers/user-detail.js';

const App = () => {
  return (
    <div>
      <h1>Username list :</h1>
      <UserList />
      <hr/>
      <h1>User details</h1>
      <UserDetail />
    </div>
  );
};

export default App;
