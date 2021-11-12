import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import './AddProducts.css'

const AddProducts = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        axios.post('https://agile-anchorage-04157.herokuapp.com/addCars', data)
            .then(res => {
            console.log(res);
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are successfully submited your order',
                showConfirmButton: false,
                timer: 3000
            })
            
        
    }
    
    return (
        <div className='addCar'>
        <h1 className='text-danger pb-0 my-3 text-center'>Add a car to sell</h1>
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