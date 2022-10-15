import React from 'react';
import './ProductDetails.css'
const ProductDetails = ({ product,addedProduct }) => {
    const { image, title } = product
    console.log(product)
    return (
        <div className='col-md-4'>
            <img className='w-50 h-75 p-3' src={image} alt="" />
            <h4>{title.slice(0, 10)}</h4>
            <div>
                <button className='bg-success text-white ps-2 ' onClick={addedProduct}>Add</button>
                <button className='bg-danger text-white ps-2 ml-3 '>Delete</button>
                <button>Details</button>
            </div>
        </div>
    );
};

export default ProductDetails;