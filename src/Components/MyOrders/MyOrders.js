import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    console.log(orders);
    return (
        <div>
            <h1 className="text-danger text-center"> Your amazing purchases are here!</h1>
            <Row xs={1} md={2} className="my-5">
                {orders.map((order) => (
                    <Col>
                        <Card className="d-flex flex-row align-items-center justify-content-center my-1 mx-1">
                            <Card.Img variant="left" src={order.img} width="100px" />
                            <Card.Body>
                                <Card.Title className="text-success">{order.orderName}</Card.Title>
                                <h4>{order.price}</h4>
                                <h6 className='text-primary'>{order.email}</h6>
                            </Card.Body>
                            <div className='w-25 mx-auto text-secondary'><h6>{order.status}</h6></div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;
