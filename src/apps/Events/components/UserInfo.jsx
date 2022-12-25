import React from 'react'

function UserInfo(props) {
  const user = props.user;
  console.log(":: USER VALUE ::", user);
  console.log(":: USERINFO PROPS ::", props);
  return (
    <div>
        <img src={user.photoURL} />
        <h2>Welcome, {user.displayName}</h2>
    </div>
  )
}

/*
  Cannot read properties of undefined (reading 'photoURL')
    at UserInfo (UserInfo.jsx:7:1)
  */

export default UserInfo