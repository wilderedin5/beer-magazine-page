import React from "react";
import { Button as BaseButton } from "antd";
import styled from "@emotion/styled";
import { Note } from "../Common/type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 10px 10px 70px 10px;
  width: 24%;
  margin-bottom: 10px;
  position: relative;
`;

const ImageContainer = styled.div`
  text-align: center;
  & img {
    width: 50px;
    height: 130px;
  }
`;

const Button = styled(BaseButton)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Beer = ({
  image,
  name,
  description,
  date,
  abv,
  tips,
  contributed,
  addItemToCart,
  beerId,
  deleteItemFromCart,
  beersInCart,
}) => (
  <Container>
    <ImageContainer>
      <img src={image} alt="" />
    </ImageContainer>
    <Note label="Название" value={name} />
    <Note label="Описание" value={description} />
    <Note label="Сварен" value={date} />
    <Note label="Крепость" value={abv} />
    <Note label="Советы от пивоваров" value={tips} />
    <Note label="Поставщик" value={contributed} />
    <Button
      disabled={addItemToCart && beersInCart.some((beer) => beer.id === beerId)}
      type="primary"
      onClick={() =>
        addItemToCart ? addItemToCart(beerId) : deleteItemFromCart(beerId)
      }
    >
      {addItemToCart ? "Добавить в корзину" : "Удалить из корзины"}
    </Button>
  </Container>
);

export default Beer;
