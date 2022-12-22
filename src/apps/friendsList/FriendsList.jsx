import React from 'react'
import { Provider } from 'react-redux'
import AddFriend from './components/AddFriend'
import Friends from './components/Friends'
import { friendsStore } from './store/friends.store'

function FriendsList() {
  return (
    <div className='ui-friends container mx-auto my-4 p-4 max-w-md border-dashed border-2 border-indigo-600 shadow-2xl'>
      <AddFriend />
      <Friends />
    </div>
  )
}

function FriendsListWithRedux() {
  return <Provider store={friendsStore}>
    <FriendsList />
  </Provider>
}

export default FriendsListWithRedux