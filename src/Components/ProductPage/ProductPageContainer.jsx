import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getBeersFromAPI, setCurrentPage, setAbvFilter } from '../../redux/product-reducer';
import { addItemToCart } from '../../redux/cart-reducer';

const ProductPageContainer = (props) => {

    useEffect(() => {
        props.getBeersFromAPI(props.currentPage, props.pageSize, props.abvFilter);
    },[props.abvFilter]);

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getBeersFromAPI(pageNumber, props.pageSize, props.abvFilter);
    }

    return ( <ProductPage addItemToCart={props.addItemToCart} beers={props.beers} onPageChanged={onPageChanged} setAbvFilter={props.setAbvFilter}
            pageSize={props.pageSize} totalItemsCount={props.totalItemsCount} currentPage={props.currentPage} beersInCart={props.beersInCart} />
    )
}

const mapStateToProps = (state) => {
    return {
        beers: state.productPage.beers,
        beersInCart: state.cart.cart,
        currentPage: state.productPage.currentPage,
        totalItemsCount: state.productPage.totalItemsCount,
        pageSize: state.productPage.pageSize,
        abvFilter: state.productPage.abvFilter
    }
}

export default connect(mapStateToProps, { getBeersFromAPI, addItemToCart, setCurrentPage, setAbvFilter })(ProductPageContainer);