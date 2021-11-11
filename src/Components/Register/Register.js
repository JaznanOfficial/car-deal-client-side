import React, { useState } from 'react';
import './Register.css'
import { Link } from "react-router-dom";
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const { registerWithPassword } = useFirebase();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        registerWithPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            // ..
          });
    }
    
    
    return (
        <div className='register'>
        <h1 className='text-center text-primary my-5'>Register</h1>
        <form onSubmit={handleSubmit}>
      <input type='text'  placeholder='Your Name' onBlur={handleName} />
      <input type='email'  placeholder='Your Email' onBlur={handleEmail} />
      <input type="password"  placeholder='Your Password' onBlur={handlePassword} />
      <input type="submit" />
            </form>
            <h1 className='text-center text-primary'>________________</h1>
            <h4 className='text-center'>Already Registered? Please <Link to='/login'> Log In </Link></h4>
        </div>
    );
    
};

export default Register;