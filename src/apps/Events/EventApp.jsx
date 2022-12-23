import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { firebaseAuth } from './firebase.config';

function EventApp() {
    const [user, setUser] = useState(null);
    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider)
            .then(success => {
                console.log(":: SIGN IN SUCCESS ::", success);
                setUser(success.user);
            })
            .catch(error => console.log(":: SIGN IN ERROR :::", error))
    }

    return <div className='p-5'>
        {user ? <h2>Welcome {user.displayName}</h2> : <button className='bg-red-400 shadow p-4' onClick={handleGoogleLogin}>Login with Gmail</button>}

    </div>
}

export default EventApp;