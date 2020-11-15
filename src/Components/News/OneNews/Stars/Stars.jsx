import React from "react";
import styled from "@emotion/styled";
import Star from "./Star/Star";

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Stars = ({ totalStars, id, starSelected, changeRating }) => (
  <Container>
    {[...Array(totalStars)].map((star, index) => (
      <Star
        key={index}
        id={id}
        index={index}
        changeRating={changeRating}
        selected={index < starSelected}
      />
    ))}
  </Container>
);

export default Stars;
