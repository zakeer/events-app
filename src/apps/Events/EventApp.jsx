import React from 'react';
import { useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, GoogleAuthProvider } from 'firebase/auth';
import { firebaseAuth, firebaseDB } from './firebase.config'
import UserInfo from './components/UserInfo';
import { ref, child, get, set } from 'firebase/database'


function EventApp() {
    const [user, setUser] = useState(null);
    const [hasError, setError] = useState(false);

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(firebaseAuth, provider) // Promise 
            .then((googleUserResponse) => {
                console.log(":: SUCCESS ::", googleUserResponse);

                const { displayName, email, phoneNumber, photoURL, uid } = googleUserResponse.user;
                const userDetails = {
                    displayName,
                    email,
                    phoneNumber,
                    photoURL,
                    uid
                };

                setUser(userDetails);

                // Check DB for this user based on UID
                const dbRef = ref(firebaseDB);
                get(child(dbRef, `users/${uid}`))
                    .then(snapshot => {
                        if (snapshot.exists()) {
                            console.log("USER EXISTS...")
                        } else {
                            console.log("USER NOT EXISTS")
                            // Create a new user in realtime DB
                            set(ref(firebaseDB, `users/${uid}`), userDetails)
                                .then(success => console.log(":: USER CREATED SUCCESS", success))

                        }
                    }).catch(error => {

                    })
            })
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