import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const SingelProduct = ({products}) => {
    return (
        <div className='row'>
            {
                products.map(product=><ProductDetails
                product={product}
                ></ProductDetails>)
            }
        </div>
    );
};

export default SingelProduct;