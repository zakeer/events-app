import React from 'react';
import { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, GoogleAuthProvider } from 'firebase/auth';
import { firebaseAuth } from './firebase.config'
import UserInfo from './components/UserInfo';

function EventApp() {
    const [user, setUser] = useState(null);
    const [hasError, setError] = useState(false);

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider) // Promise 
            .then((googleUserResponse) => {
                console.log(":: SUCCESS ::", googleUserResponse);
                setUser(googleUserResponse.user);
            }) // Success
            .catch((errorResponse) => {
                console.log(":: ERROR ::", errorResponse);
                setError(true);
            }) // Fail
    }


    return <div className='p-5'>
        {hasError && <p className='text-red-400 p-2'>Internal Error</p>}
        {user ?
            <UserInfo user={user} /> :
            <button className='bg-red-400 shadow p-4' onClick={handleGoogleLogin}>Login with Gmail</button>}

    </div>
}

export default EventApp;