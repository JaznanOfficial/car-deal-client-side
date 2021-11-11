import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='register'>
        <h1 className='text-center text-primary my-5'>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register("Name")} placeholder='Your Name' />
      <input type='email' {...register("Email")} placeholder='Your Email' />
      <input type="password" {...register("Password")} placeholder='Your Password' />
      <input type="submit" />
            </form>
            <h1 className='text-center text-primary'>________________</h1>
            <h4 className='text-center'>Already Registered? Please <Link to='/login'> Log In </Link></h4>
        </div>
    );
    
};

export default Register;