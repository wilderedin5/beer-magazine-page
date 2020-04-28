import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getBeersFromAPI } from '../../redux/product-reducer';
import { addItemToCart } from '../../redux/cart-reducer';

const ProductPageContainer = (props) => {

    useEffect(() => {
        props.getBeersFromAPI();
    },[])

    return (
        <ProductPage addItemToCart={props.addItemToCart} beers={props.beers} />
    )
}

const mapStateToProps = (state) => {
    return {
        beers: state.productPage.beers
    }
}

export default connect(mapStateToProps, { getBeersFromAPI, addItemToCart })(ProductPageContainer);