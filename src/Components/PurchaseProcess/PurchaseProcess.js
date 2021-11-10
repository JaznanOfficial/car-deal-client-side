import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useParams } from "react-router";

const PurchaseProcess = () => {
    const { id } = useParams();
    const [purchases, setPurchases] = useState([]);
    useEffect(() => {
        fetch("https://agile-anchorage-04157.herokuapp.com/cars")
            .then((res) => res.json())
            .then((data) => setPurchases(data));
    }, []);
    const matchedData = purchases.find((purchase) => purchase._id == id);
    const { _id, name, img, details, price } = matchedData || {};
    return (
        <div>
            <div className="d-lg-flex flex-row-reverse justify-content-between mx-auto w-75 align-items-center">
                <div className="my-3 mx-auto w-100">
                    <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <h1 className="text-danger">{name}</h1>
                            <h3 className="text-success"> {price} </h3>
                            <h4> {details} </h4>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-100 m-lg-5 my-3">
                    <div className="d-lg-flex justify-content-center mx-auto w-100 align-items-center">
                        <div className="w-100 my-3">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Your Name"
                                        value=""
                                        onBlur="{handleName}"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Your Email"
                                        value=""
                                        onBlur="{handleEmail}"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Your Address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="number" placeholder="Your Contact Number" />
                                </Form.Group>

                                <Button
                                    onSubmit="{handleBookingProcess}"
                                    variant="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProcess;
