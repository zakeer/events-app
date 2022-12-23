import React from 'react';
import './App.css';
import MyCounterApp, { SOME_DATA as counterData } from './apps/counter/CounterApp';
import EventApp from './apps/Events/EventApp';
import FriendsListApp from './apps/friendsList/FriendsList';


// function App() {
//   return (
//     <div className="App">
//       {counterData}
//       <MyCounterApp />
//       <hr />
//       <FriendsListApp />
//     </div>
//   );
// }

function App() {
  return <EventApp />
}

export default App;
