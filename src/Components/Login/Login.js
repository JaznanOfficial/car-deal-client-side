import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import './Login.css'
import { Link } from "react-router-dom";

import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { signinWithPassword,setIsLoading } = useAuth();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')
    const history = useHistory();
    const location = useLocation()
    console.log(location);
    const uri = location.state?.from || '/home'


    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value);
        
}
    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value);
}
    const handleSubmit = (e) => {
      e.preventDefault()
      if (password.length < 6) {
        setError('Password must be at least 6 character')
        return;
      }
        signinWithPassword(email, password)
            .then((userCredential) => {
                setIsLoading(true)
                history.replace(uri);
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
              setError('')
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally (
            () => {
              setIsLoading(false)
            }
      )
      
}

   
    
    return (
        <div className='login'>
            <h1 className='text-center text-primary my-5'>Login Please</h1>
        <form onSubmit={handleSubmit}>
      
      <input type='email' onBlur={handleEmail}  placeholder='Your Email' />
      <input type="password" onBlur = {handlePassword} placeholder='Your Password' />
      <input type="submit" value='Log In' />
        </form>
        <h6 className='text-danger text-center'>{error}</h6>
            <h1 className='text-center text-primary'>________________</h1>
            <h4 className='text-center'>New here? Please <Link to='/register'> Register </Link></h4>
        </div>
    );
};

export default Login;