import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Note, Button } from "../common/type";
import { Stars } from "./stars";

const Container = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
`;

const Tools = styled.div`
  display: flex;
  & button:not(:last-child) {
    margin-right: 10px;
  }
`;

export const NewsItem = ({
  isOpened,
  theme,
  text,
  author,
  category,
  deleteNews,
  id,
  rating,
  selected,
  setRating,
}) => (
  <Container>
    <Note label="Тема" value={theme} />
    <div>{isOpened ? text : text.substring(0, 300) + "...."}</div>
    <Note label="Автор" value={author} />
    <Note label="Категория" value={category} />
    <Tools>
      <Button onClick={() => deleteNews(id)}>Удалить новость</Button>

      <NavLink to={`/news/${isOpened ? "" : id}`}>
        <Button>
          {isOpened
            ? "Вернуться на страницу новостей"
            : "Перейти на страницу новости"}
        </Button>
      </NavLink>
    </Tools>
    <Stars id={id} selected={selected} rating={rating} setRating={setRating} />
  </Container>
);
