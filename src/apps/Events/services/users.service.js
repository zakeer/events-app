import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { child, get, ref, set } from "firebase/database";
import { firebaseAuth, firebaseDB } from "../firebase.config"

// User Login
export const userLogin = async () => {
  // 1. Provider Login with Gmail
  const provider = new GoogleAuthProvider();
  const googleResponse = await signInWithPopup(firebaseAuth, provider);
  const { user } = googleResponse;
  return user;
}

export const checkIfUserExistOrNot = async (userDetails) => {
  const { uid } = userDetails;
  const dbRef = ref(firebaseDB);
  const snapshot = await get(child(dbRef, `users/${uid}`));
  return snapshot.exists();
}


// 1. Get User Details (User -> UID)
const getUserDetails = async (userUid) => {
  // Check DB for this user based on UID


}

// 2. Create new user details ( {displayName, UID, photo, email, ...} )
export const createNewUser = ({ displayName, email, phoneNumber, photoURL, uid }) => {
  const dbRef = ref(firebaseDB, `users/${uid}`);
  const userPayload = {
    displayName, email, phoneNumber, photoURL, uid
  }
  set(dbRef, userPayload);
}

// 3. Update user details (User -> UID, {})
const updateUserDetails = (userUid, updatedUserDetails) => {

}