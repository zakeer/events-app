import React from 'react';
import './App.css';
import MyCounterApp, { SOME_DATA as counterData } from './apps/counter/CounterApp';
import FriendsListApp from './apps/friendsList/FriendsList';


function App() {
  return (
    <div className="App">
      {counterData}
      <MyCounterApp />
      <hr />
      <FriendsListApp />
    </div>
  );
}

export default App;
