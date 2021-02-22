import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/cart-reducer";
import { Beer } from "../beer";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Cart = ({ cart, deleteProduct }) => (
  <Container>
    {cart.map((beer, index) => (
      <Beer beer={beer} onDelete={deleteProduct} key={index} />
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { deleteProduct })(Cart);
