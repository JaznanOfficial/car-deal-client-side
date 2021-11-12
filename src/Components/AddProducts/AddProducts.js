import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        axios.post('https://agile-anchorage-04157.herokuapp.com/addCars', data)
            .then(res => {
            console.log(res);
        })
    }
    return (
        <div className='addCar'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input {...register("img" )} />
        <input {...register("details" )} />
        <input type="number" {...register("price")} />
        <input type="submit" />
      </form>
        </div>
    );
};

export default AddProducts;