import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getBeersFromAPI,
  setCurrentPage,
  setAbvFilter,
} from "../../redux/product-reducer";
import { addProduct, deleteProduct } from "../../redux/cart-reducer";
import { ProductPage } from "./ProductPage";

const ProductPageContainer = (props) => {
  useEffect(() => {
    props.getBeersFromAPI(props.currentPage, props.pageSize, props.abvFilter);
  }, [props.abvFilter]);

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    props.getBeersFromAPI(pageNumber, props.pageSize, props.abvFilter);
  };

  return (
    <ProductPage
      addProduct={props.addProduct}
      beers={props.beers}
      deleteProduct={props.deleteProduct}
      onPageChanged={onPageChanged}
      setAbvFilter={props.setAbvFilter}
      pageSize={props.pageSize}
      total={props.total}
      currentPage={props.currentPage}
      cartItems={props.cartItems}
    />
  );
};

const mapStateToProps = (state) => ({
  beers: state.productPage.beers,
  cartItems: state.cart.cart,
  currentPage: state.productPage.currentPage,
  total: state.productPage.total,
  pageSize: state.productPage.pageSize,
  abvFilter: state.productPage.abvFilter,
});

export default connect(mapStateToProps, {
  getBeersFromAPI,
  addProduct,
  setCurrentPage,
  setAbvFilter,
  deleteProduct,
})(ProductPageContainer);
