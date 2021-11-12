import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='makeAdmin'>
        <h1 className='text-danger pb-0 my-3 text-center'>Please Make an admin here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Type admin email address' {...register("adminName")} />
        <input type="submit" />
      </form>
        </div>
    );
};

export default MakeAdmin;