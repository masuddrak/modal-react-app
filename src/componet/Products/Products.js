import React, { useEffect, useState } from 'react';
import SingelProduct from '../SingelProduct/SingelProduct';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className=''>
            <h2>Show All Products {products.length}</h2>
            <div>
                <SingelProduct products={products}></SingelProduct>
            </div>
        </div>
    );
};

export default Products;