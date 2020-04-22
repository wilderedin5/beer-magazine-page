import React from 'react';
import style from './ProductPage.module.scss';

const ProductPage = (props) => {
    return(
    <div>
        {
            props.beers.map(beer => <div>{beer.name}</div>)
        }
    </div>
    )
}

export default ProductPage;