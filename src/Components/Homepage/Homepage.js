import React from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import GetttingRating from '../GettingRating/GetttingRating';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <GetttingRating></GetttingRating>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Homepage;