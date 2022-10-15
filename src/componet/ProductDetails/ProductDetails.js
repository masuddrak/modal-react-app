import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({product}) => {
    const {image,title}=product
    console.log(product)
    return (
        <div className='col-md-4'>
            <img className='product-image' src={image} alt="" />
            <h4>{title.slice(0,10)}</h4>
        </div>
    );
};

export default ProductDetails;