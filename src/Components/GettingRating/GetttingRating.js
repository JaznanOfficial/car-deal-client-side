import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import Review from "../Review/Review";
import quote1 from "./quote 1.png";
import quote2 from "./quote 2.png";

const GetttingRating = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://agile-anchorage-04157.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    console.log(reviews);
    
    return (
        <div className="m-5 px-3">
            <h1 className="text-center text-danger mt-5">Reviews</h1>

            <Row xs={1} md={2} className="g-4">
                {reviews.map((review) => <Review
                    key={review._id}
                    review={review}
                ></Review>)}
            </Row>
        </div>
    );
};

export default GetttingRating;
