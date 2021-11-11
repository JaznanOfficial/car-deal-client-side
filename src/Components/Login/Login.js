import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='login'>
            <h1 className='text-center text-primary my-5'>Login Please</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type='email' {...register("email")} placeholder='Your Email' />
      <input type="password" {...register("password")} placeholder='Your Password' />
      <input type="submit" />
            </form>
            <h1 className='text-center text-primary'>________________</h1>
            <h4 className='text-center'>New here? Please <Link to='/register'> Register </Link></h4>
        </div>
    );
};

export default Login;