import React, { useEffect, useState } from 'react';
import initializeConfig from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile } from "firebase/auth";




initializeConfig()
const useFirebase = () => {
    
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    




/* register process......................... */
    const registerWithPassword = (email, password) => {
        console.log(user);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /* register process......................... */
    
    /* login process......................... */

    const signinWithPassword = (email, password) => {
        console.log('successfully loged in');
     return   signInWithEmailAndPassword(auth, email, password)
     
    }
    
    /* login process......................... */


    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
             
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    
    const logout = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

   
   

// observer
useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
        if (user) {
            setUser(user)
        }
        else {
            setUser({})
        }
        setIsLoading(false)
    });
    return () => unsubscribed;
}, [])

    
    

    return {
        setUser,
        user,
        signinWithPassword,
        registerWithPassword,
        isLoading,
        setIsLoading,
        logout,
        updateName,
    };
};

export default useFirebase;