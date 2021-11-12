import React, { useState } from 'react';
import './Register.css'
import { Link } from "react-router-dom";
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
    const { registerWithPassword,setUser,updateName,setIsLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error,setError] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation()
    // console.log(location);
    const uri = '/login'


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
        if (password.length < 6) {
            setError('Password must be at least 6 character')
            return;
          }
        registerWithPassword(email, password)
            .then((userCredential) => {
                updateName(name)
                setIsLoading(true)
                
            // Signed in 
            const user = userCredential.user;
                setUser(user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You are successfully registered. please log in now',
                    showConfirmButton: false,
                    timer: 3000
                })

                axios.post('http://localhost:5000/users', user)
                    .then(res => {
                    console.log(res);
                })


            // ...
            history.replace(uri);
          })
          .catch((error) => {
            
            const errorMessage = error.message;
            setError(errorMessage)
          });
    }
    
    
    return (
        <div className='register'>
        <h1 className='text-center text-primary my-5'>Register</h1>
        <form onSubmit={handleSubmit}>
      <input type='text'  placeholder='Your Name' onBlur={handleName} />
      <input type='email'  placeholder='Your Email' onBlur={handleEmail} />
      <input type="password"  placeholder='Your Password' onBlur={handlePassword} />
      <input type="submit" value='Register' />
            </form>
            <h6 className='text-danger text-center'>{error}</h6>
            <h1 className='text-center text-primary'>________________</h1>
            <h4 className='text-center'>Already Registered? Please <Link to='/login'> Log In </Link></h4>
        </div>
    );
    
};

export default Register;