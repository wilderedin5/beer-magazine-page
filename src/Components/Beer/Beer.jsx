import React from "react";
import { Button } from "antd";
import styled from "@emotion/styled";
import { Note } from "../Common/type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #000;
  padding: 10px;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 50px;
  height: 130px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  align-self: center;
`;

const Beer = ({
  image,
  name,
  description,
  date,
  abv,
  tips,
  contributed,
  addProduct,
  beerId,
  deleteProduct,
  cartItems,
}) => (
  <Container>
    <div>
      <Img src={image} />
      <Note label="Название" value={name} />
      <Note label="Описание" value={description} />
      <Note label="Сварен" value={date} />
      <Note label="Крепость" value={abv} />
      <Note label="Советы от пивоваров" value={tips} />
      <Note label="Поставщик" value={contributed} />
    </div>

    <StyledButton
      disabled={addProduct && cartItems.some((beer) => beer.id === beerId)}
      type="primary"
      onClick={() => (addProduct ? addProduct(beerId) : deleteProduct(beerId))}
    >
      {addProduct ? "Добавить в корзину" : "Удалить из корзины"}
    </StyledButton>
  </Container>
);

export default Beer;
