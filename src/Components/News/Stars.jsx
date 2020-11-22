import React from "react";
import styled from "@emotion/styled";

const Star = styled.div`
  font-size: 18px;
  cursor: pointer;
  color: ${(p) => (p.selected ? "orange" : "grey")};
  margin-left: 7px;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Stars = ({ rating, id, selected, setRating }) => (
  <Container>
    {[...Array(rating)].map((star, i) => (
      <Star
        key={i}
        onClick={() => setRating(id, i + 1)}
        selected={i < selected}
      >
        &#9733;
      </Star>
    ))}
  </Container>
);
