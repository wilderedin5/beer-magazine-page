import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getBeers,
  changePage,
  setAbvFilter,
} from "../../redux/product-reducer";
import { manageProduct } from "../../redux/cart-reducer";
import { ProductPage } from "./product-page";

const ProductPageContainer = (props) => {
  useEffect(() => {
    props.getBeers(props.currentPage, props.pageSize, props.abvFilter);
  }, [props.abvFilter]);

  const onPageChange = (pageNumber) => {
    props.changePage(pageNumber);
    props.getBeers(pageNumber, props.pageSize, props.abvFilter);
  };

  return (
    <ProductPage
      onManage={props.manageProduct}
      beers={props.beers}
      onPage={onPageChange}
      setAbvFilter={props.setAbvFilter}
      pageSize={props.pageSize}
      total={props.total}
      currentPage={props.currentPage}
      cart={props.cart}
    />
  );
};

const mapStateToProps = (state) => ({
  beers: state.productPage.beers,
  cart: state.cart.cart,
  currentPage: state.productPage.currentPage,
  total: state.productPage.total,
  pageSize: state.productPage.pageSize,
  abvFilter: state.productPage.abvFilter,
});

export default connect(mapStateToProps, {
  getBeers,
  changePage,
  setAbvFilter,
  manageProduct,
})(ProductPageContainer);
