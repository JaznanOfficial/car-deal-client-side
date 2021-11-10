import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[])
    return (
        <div className='products-div mx-2 my-5'>
        <div className='my-3'>
                <h1 className='text-danger pb-0 mb-0'>Our Best Cars</h1>
                <h1 className='text-danger pt-0 mt-0 mb-5'>o----------------------------o</h1>
                
                
        </div>
        <Row xs={1} md={3} className="g-4 products">
            {
                    products.slice(0,6).map(product => <Product
                        key={product.name}
                        product={product}
                    ></Product>)
            }
        </Row>
        </div>
    );
};

export default Products;