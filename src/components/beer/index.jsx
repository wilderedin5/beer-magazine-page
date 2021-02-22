import React from "react";
import styled from "@emotion/styled";
import { Note, Button } from "../common/type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #000;
  padding: 10px;
`;

const Img = styled.img`
  width: 50px;
  height: 130px;
  align-self: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  align-self: center;
`;

export const Beer = ({ beer, onAdd, onDelete, cartItems }) => {
  const { image, name, desc, date, abv, tips, contributed, beerId } = beer;
  const isReserve = cartItems.some(({ id }) => id === beerId);
  return (
    <Container>
      <Img src={image} />
      <Note label="Название" value={name} />
      <Note label="Описание" value={desc} />
      <Note label="Сварен" value={date} />
      <Note label="Крепость" value={abv} />
      <Note label="Советы от пивоваров" value={tips} />
      <Note label="Поставщик" value={contributed} />
      <StyledButton
        onClick={() => (isReserve ? onDelete(beerId) : onAdd(beerId))}
      >
        {isReserve ? "Удалить из корзины" : "Добавить в корзину"}
      </StyledButton>
    </Container>
  );
};
