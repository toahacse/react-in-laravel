import React, { useEffect, useState } from 'react';
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[]);

    return (
        <div>
            <h1>Products</h1>
            <div className='row m-0 p-0'>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;