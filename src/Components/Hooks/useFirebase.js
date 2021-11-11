import React, { useState } from 'react';
import initializeConfig from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




initializeConfig()
const useFirebase = () => {
    
    const auth = getAuth();
    const [user, setUser] = useState({})
    





    const registerWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
  
    }
    return {
        registerWithPassword,
    };
};

export default useFirebase;