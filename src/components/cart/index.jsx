import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { manageProduct } from "../../redux/cart-reducer";
import { Beer } from "../beer";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Cart = ({ cart, manageProduct }) => (
  <Container>
    {cart.length ? (
      cart.map((beer, index) => (
        <Beer
          beer={{ ...beer, isReserve: true }}
          onManage={manageProduct}
          key={index}
        />
      ))
    ) : (
      <Redirect to="/" />
    )}
  </Container>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { manageProduct })(Cart);
