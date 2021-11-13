import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageUser = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://agile-anchorage-04157.herokuapp.com/manage-users')
            .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    
    console.log(users);
    return (
        <div>
        <div className='mx-2 text-center'>
        <h1 className="text-danger text-center mt-3">Your all users!</h1>
        <Row xs={1} md={2} className="my-5 g-1">
            {users.map((user) =>(
                
                <Col>
                    <Card>
                        <div className="d-lg-flex flex-row align-items-center justify-content-center my-1">
                        
                        <Card.Body>
                            <Card.Title className="text-success">{user.email}</Card.Title>
                                <h6 className='text-center text-danger'>User ID: {user.uid}</h6>
                            
                        </Card.Body>
                        
                        </div>
                        
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
        </div>
    );
};

export default ManageUser;