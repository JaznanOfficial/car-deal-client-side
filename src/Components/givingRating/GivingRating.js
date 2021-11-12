import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import './GivingRating.css'

const GivingRating = () => {
    const { user } = useAuth()
    
    const [review,setReview] = useState('')
    const [rating,setRating] = useState('')
    // const [review,setReview] = useState('')
    const history = useHistory();
    const location = useLocation()
    // console.log(location);
    const uri = '/home'
    

    const handleReview = (e) => {
        e.preventDefault()
        setReview(e.target.value);
    }

    const handleRating = (e) => {
        e.preventDefault()
        setRating(e.target.value);
    }

    const reviewData = {review:review,rating:rating,userName:user.displayName}

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://agile-anchorage-04157.herokuapp.com/review', reviewData)
            .then(res => {
            console.log(res);
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your review successfully sibmitted',
                showConfirmButton: false,
                timer: 3000
            })
        
        history.replace(uri);
        console.log(reviewData);
    }
    return (
        <div className='rating'>
            <h1 className='text-center text-primary my-3'>Give us your review and rating</h1>
        <form onSubmit={handleSubmit}>
      
                <textarea placeholder='Write your review' onBlur={handleReview}/>
                <input type='text' placeholder='Type your rating up to 5' onBlur={handleRating} maxLength={1}/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default GivingRating;