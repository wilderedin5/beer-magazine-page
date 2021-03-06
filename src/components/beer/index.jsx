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
  height: 130px;
  align-self: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  align-self: center;
`;

export const Beer = ({ beer, onManage }) => {
  const { image, name, desc, date, abv, tips, creator, id, isReserve } = beer;
  return (
    <Container>
      <Img src={image} />
      <Note label="Название" value={name} />
      <Note label="Описание" value={desc} />
      <Note label="Сварен" value={date} />
      <Note label="Крепость" value={abv} />
      <Note label="Советы от пивоваров" value={tips} />
      <Note label="Поставщик" value={creator} />
      <StyledButton onClick={() => onManage(id)}>
        {isReserve ? "Удалить из корзины" : "Добавить в корзину"}
      </StyledButton>
    </Container>
  );
};
