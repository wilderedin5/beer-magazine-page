import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getBeersFromAPI, setCurrentPage } from '../../redux/product-reducer';
import { addItemToCart } from '../../redux/cart-reducer';

const ProductPageContainer = (props) => {

    useEffect(() => {
        props.getBeersFromAPI(props.currentPage, props.pageSize);
    },[]);

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getBeersFromAPI(pageNumber, props.pageSize);
    }

    return ( <ProductPage addItemToCart={props.addItemToCart} beers={props.beers} onPageChanged={onPageChanged} 
            pageSize={props.pageSize} totalItemsCount={props.totalItemsCount} currentPage={props.currentPage} />
    )
}

const mapStateToProps = (state) => {
    return {
        beers: state.productPage.beers,
        currentPage: state.productPage.currentPage,
        totalItemsCount: state.productPage.totalItemsCount,
        pageSize: state.productPage.pageSize
    }
}

export default connect(mapStateToProps, { getBeersFromAPI, addItemToCart, setCurrentPage })(ProductPageContainer);