import React from 'react';

function Product({ product }) {
    return (
        <div className="card col-3">
            <img src={product.image} alt={product.title} className='img w-50' />
            <div className="card-body">
                <p className="card-text">{product.description}</p>
            </div>
        </div>

    );
}

export default Product;