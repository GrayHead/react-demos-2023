import React from 'react';
import './Product.module.css';

const ProductComponent = ({item}) => {
    return (
        <div>
            <h2>{item.title} {item.price}</h2>
            <img src={item.image} alt={item.title}/>

        </div>
    );
};

export default ProductComponent;
