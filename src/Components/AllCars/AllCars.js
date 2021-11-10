import React, { useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import AllCar from '../AllCar/AllCar'

const AllCars = () => {
    const [allCars, setAllCars] = useState([])
    useEffect(() => {
        fetch('https://agile-anchorage-04157.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setAllCars(data));
        ;
    }, [])
  console.log(allCars)
  // const { _id, name, details, price, img } = allCars;
    return (
      <div className='products-div mx-2 my-5'>
      <div className='my-3'>
              <h1 className='text-danger pb-0 mb-0'>Most Populer Cars</h1>
              <h1 className='text-danger pt-0 mt-0 mb-5'>o----------------------------o</h1>
              
              
      </div>
      <Row xs={1} md={2} className="g-4 products">
          {
            allCars.map(allCar => <AllCar
              key={allCar._id}
              allCar={allCar}
            ></AllCar>)
          }
      </Row>
      </div>
    );
};

export default AllCars;