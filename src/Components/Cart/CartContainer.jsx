import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { deleteProduct } from "../../redux/cart-reducer";
import Beer from "../Beer/Beer";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Cart = ({ cart, deleteProduct }) => (
  <Container>
    {cart.map((beer) => (
      <Beer
        image={beer.image_url}
        name={beer.name}
        description={beer.description}
        tips={beer.brewers_tips}
        contributed={beer.contributed_by}
        date={beer.first_brewed}
        abv={beer.abv}
        deleteProduct={deleteProduct}
        beerId={beer.id}
      />
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { deleteProduct })(Cart);
