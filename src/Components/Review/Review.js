import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import quote1 from "../GettingRating/quote 1.png";
import quote2 from "../GettingRating/quote 2.png";

const Review = (props) => {
    const { review, userName, rating } = props.review;
    const ratingNumber = Number(rating);
    console.log(ratingNumber);
    return (
        <div>
            <Col>
                <Card>
                    <div className="my-5 mx-lg-5 mx-3 text-center">
                        <img src={quote1} alt="" width="50px" />
                        <p>{review}</p>
                        <h3 className="text-primary">-{userName}</h3>
                        <img src={quote2} alt="" width="50px" />
                    </div>
                    <div className="mb-2 mx-lg-5 mx-3 text-center">
                        <Rating
                            className='text-danger'
                            emptySymbol="fa fa-star-o"
                            fullSymbol="fa fa-star"
                            initialRating={ratingNumber}
                            readonly
                        />
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Review;
