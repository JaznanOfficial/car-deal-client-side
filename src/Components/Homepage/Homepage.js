import React from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Homepage;