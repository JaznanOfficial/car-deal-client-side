import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

const MyOrders = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://agile-anchorage-04157.herokuapp.com/orders?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    console.log(orders);
    return (
        <div>
        <div className='mx-2 text-center'>
        <h1 className="text-danger text-center mt-3">Your amazing orders!</h1>
        <Row xs={1} md={2} className="my-5 g-1">
            {orders.map((order) =>(
                
                <Col>
                    <Card>
                        <div className="d-lg-flex flex-row align-items-center justify-content-center my-1">
                        <Card.Img variant="left" src={order.img} width="150px" className='m-2' />
                        <Card.Body>
                            <Card.Title className="text-success">{order.orderName}</Card.Title>
                            <h5>{order.price}</h5>
                            <h6 className='text-primary'>{order.email}</h6>
                        </Card.Body>
                        <div className='w-25 mx-auto text-secondary'><h6 className='mb-3'>{order.status}</h6>
                        
                        </div>
                        </div>
                        
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
        </div>
    );
};

export default MyOrders;
