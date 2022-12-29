import React from 'react';
import { useState } from 'react';
import UserInfo from './components/UserInfo';
import { checkIfUserExistOrNot, createNewUser, userLogin } from './services/users.service';

function EventApp() {
    const [user, setUser] = useState(null);
    const [hasError, setError] = useState(false);

    const handleGoogleLogin = async () => {
        const userDetails = await userLogin();
        const isUserExists = await checkIfUserExistOrNot(userDetails);
        console.log("DETAILS", { userDetails, isUserExists })
        if (!isUserExists) {
            createNewUser(userDetails);
        }
        setUser(userDetails)
    }
    return <div className='p-5'>
        {hasError && <p className='text-red-400 p-2'>Internal Error</p>}
        {user ?
            <UserInfo user={user} /> :
            <button className='bg-red-400 shadow p-4' onClick={handleGoogleLogin}>Login with Gmail</button>}
    </div>
}

export default EventApp;