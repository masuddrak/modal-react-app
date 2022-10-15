import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const SingelProduct = ({products,addedProduct}) => {
    return (
        <div className='row'>
            {
                products.map(product=><ProductDetails
                product={product}
                addedProduct={addedProduct}
                ></ProductDetails>)
            }
        </div>
    );
};

export default SingelProduct;