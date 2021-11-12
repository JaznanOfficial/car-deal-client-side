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
        <input placeholder='Product Name' {...register("name")} />
        <input placeholder='Product Img Url' {...register("img" )} />
        <input placeholder='Product Details' {...register("details" )} />
        <input placeholder='Product Price' type="number" {...register("price")} />
        <input type="submit" />
      </form>
        </div>
    );
};

export default AddProducts;