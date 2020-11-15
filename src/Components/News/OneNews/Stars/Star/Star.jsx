import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-right: 7px;
  font-size: 18px;
  cursor: pointer;
  color: ${(p) => (p.selected ? "orange" : "grey")};
`;

const Star = ({ id, index, changeRating, selected }) => (
  <Container onClick={() => changeRating(id, index + 1)} selected={selected}>
    &#9733;
  </Container>
);

export default Star;
