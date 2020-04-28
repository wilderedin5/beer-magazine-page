import React from 'react';
import style from './ProductPage.module.scss';
import Beer from '../Beer/Beer';
import Paginator from '../Common/Paginator/Paginator';

const ProductPage = (props) => {
    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} />
            <div className={style.ProductPage}>
                {
                    props.beers.map(beer => <Beer image={beer.image_url} name={beer.name} description={beer.description} tips={beer.brewers_tips} beerId={beer.id}
                        contributed={beer.contributed_by} date={beer.first_brewed} abv={beer.abv} addItemToCart={props.addItemToCart} />)
                }
            </div>
        </div>
    )
}

export default ProductPage;