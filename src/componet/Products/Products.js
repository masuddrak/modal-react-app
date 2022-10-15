import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';
import './Products.css'

const Products = ({addedProduct}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fack.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className=''>
            <h2>Show All Products {products.length}</h2>
            <div>
                <SingelProduct
                 products={products}
                 addedProduct={addedProduct}
                ></SingelProduct>
            </div>
        </div>
    );
};

export default Products;