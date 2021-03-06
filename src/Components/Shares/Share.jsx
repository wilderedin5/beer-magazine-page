import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { Comment } from "../common/comment";
import { Note, Button } from "../common/type";
import ShareForm from "./share-form";

const StyledComment = styled(Comment)`
  margin-bottom: 10px;
`;

const Container = styled.div`
  padding: 20px;
  border: 1px solid #000;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export const Share = ({
  share,
  onCommentAdd,
  onCommentDelete,
  onCommentLike,
  isOpened,
}) => {
  const { desc, img, name, id, time, comment } = share;
  const onSubmit = ({ text, name }) => {
    onCommentAdd(v4(), text, name, false, 0, +isOpened);
  };

  return (
    <Container isOpened={isOpened}>
      <Img src={img} />
      <Note label="Акция" value={name} />
      <Note label="Описание" value={isOpened ? desc : desc.slice(0, 200)} />
      <Note label="Дата проведения" value={time} />

      {isOpened && (
        <>
          {comment.map((comment, index) => (
            <StyledComment
              key={index}
              onRemove={() => onCommentDelete(+isOpened, comment.id)}
              onLike={() => onCommentLike(+isOpened, comment.id)}
              {...comment}
            />
          ))}
          <ShareForm onSubmit={onSubmit} />
        </>
      )}

      <NavLink to={`/share/${isOpened ? "" : id}`}>
        <StyledButton>
          {isOpened ? "Вернуться" : "Перейти"} на страницу новостей
        </StyledButton>
      </NavLink>
    </Container>
  );
};
