import React from 'react';
import style from './ProductPage.module.scss';
import Beer from '../Beer/Beer';

const ProductPage = (props) => {
    return(
    <div className={style.ProductPage}>
        {
            props.beers.map(beer => <Beer image={beer.image_url} name={beer.name} description={beer.description} tips={beer.brewers_tips} beerId={beer.id}
                                        contributed={beer.contributed_by} date={beer.first_brewed} abv={beer.abv} addItemToCart={props.addItemToCart} />)
        }
    </div>
    )
}

export default ProductPage;