import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCar = (props) => {
    const { img, name, details, price,_id } = props.allCar;
    const shortDetails = details.slice(0, 300);
    return (
        <div className='mb-5'>
        
        
          <Col>
            <Card className='rounded shadow'>
              <Card.Img variant="top" src={img} width='300px' height='250px' />
                    <Card.Body>
                        <h1 className='text-danger'>{name}</h1>
                        <h3 className='text-success'>{price}</h3>
                
                  <h5>{shortDetails}</h5>
                  <div >
                            <Link to={`/purchase/${_id}`} className="d-grid gap-2 text-decoration-none">
                            <Button variant="outline-danger" size="lg">
                    <h3>Purchase</h3>
                  </Button>
                            </Link>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        
      
        </div>
    );
};

export default AllCar;