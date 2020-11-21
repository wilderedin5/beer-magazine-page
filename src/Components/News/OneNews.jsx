import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { Note } from "../Common/type";
import Stars from "./Stars";

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

const OneNews = ({
  newsOpened,
  theme,
  text,
  author,
  category,
  deleteNews,
  id,
  totalStars,
  starSelected,
  changeRating,
}) => (
  <Container>
    <Note label="Тема" value={theme} />
    <div>{newsOpened ? text : text.substring(0, 300) + "...."}</div>
    <Note label="Автор" value={author} />
    <Note label="Категорияа" value={category} />
    <Tools>
      <Button type="primary" onClick={() => deleteNews(id)}>
        Удалить новость
      </Button>

      <NavLink to={`/news/${newsOpened ? "" : id}`}>
        <Button type="primary">
          {newsOpened
            ? "Вернуться на страницу новостей"
            : "Перейти на страницу новости"}
        </Button>
      </NavLink>
    </Tools>
    <Stars
      id={id}
      starSelected={starSelected}
      totalStars={totalStars}
      changeRating={changeRating}
    />
  </Container>
);

export default OneNews;
