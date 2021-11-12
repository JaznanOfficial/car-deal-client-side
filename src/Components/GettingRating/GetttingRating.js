import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import quote1 from './quote 1.png';
import quote2 from './quote 2.png';

const GetttingRating = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('https://agile-anchorage-04157.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews);
    return (
        <div className='m-5 px-3'>
        <h1 className='text-center text-danger mt-5'>Reviews</h1>
            
        <Row xs={1} md={2} className="g-4">
        
                {
                    reviews.map(review => 
                        <Col>
            <Card>
            <div className='my-5 mx-lg-5 mx-3'>
            <img src={quote1} alt="" width='50px' />
            <p>{review.review}</p>
            <h3 className='text-primary'>-{review.userName}</h3>
        <img src={quote2} alt="" width='50px'/>
        </div>
            </Card>
          </Col>
                        )
                }
                
          
      
      </Row>
            
            
            
            
            
            
            
        </div>
    );
};

export default GetttingRating;