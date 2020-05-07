import React from 'react';
import style from './ProductPage.module.scss';
import Beer from '../Beer/Beer';
import FilterForm from './FilterForm/FilterForm';
import { Pagination } from 'antd';

const ProductPage = (props) => {
    const onSubmit = (formData) => {
        props.setAbvFilter(formData.abv);
    }

    return (
        <div>
            <div className={style.panel}>
                <Pagination defaultCurrent={1} onChange={props.onPageChanged} total={props.totalItemsCount} showSizeChanger={false} />
                <FilterForm onSubmit={onSubmit} />
            </div>
            
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