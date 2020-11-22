import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/cart-reducer";
import { Beer } from "../Beer/Beer";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-gap: 20px;
`;

const Cart = ({ cart, deleteProduct }) => (
  <Container>
    {cart.map((beer) => (
      <Beer {...beer} deleteProduct={deleteProduct} />
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { deleteProduct })(Cart);
