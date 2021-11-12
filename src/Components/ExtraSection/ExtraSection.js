import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ExtraSection = () => {
    return (
        <div className='m-lg-5 m-3'>
            <h1 className='text-center text-success'>Our claimed awards gallery</h1>
        <Row xs={1} md={4} className="g-4">
        
          <Col>
            <Card>
              <Card.Img variant="top" src="https://d16yj43vx3i1f6.cloudfront.net/uploads/2019/06/Award-cup-getty-image.jpg" />
              
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://kctexinternational.com/wp-content/uploads/2017/10/shutterstock_270377375.jpg" />
              
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://signalprocessingsociety.org/sites/default/files/uploads/images/community_involvement/awards_pg.jpg" />
              
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://www.awards-adf.jp/wp-content/uploads/2020/09/adf-awards-19-768x512.jpeg" />
              
            </Card>
          </Col>
        
      </Row>
        </div>
    );
};

export default ExtraSection;