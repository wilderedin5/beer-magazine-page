import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { Comment as BaseComment } from "../common/comment";
import { Note, Button } from "../common/type";
import ShareForm from "./share-form";

const StyledComment = styled(BaseComment)`
  margin-bottom: 10px;
`;

const Container = styled.div`
  border: 1px solid #000;
  flex-basis: ${(p) => (p.isOpened ? "100%" : "49%")};
  margin-bottom: 10px;
  padding: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const Comments = styled.div`
  margin-top: 10px;
`;

export const Share = ({
  addComment,
  isOpened,
  desc,
  img,
  name,
  id,
  time,
  comment,
  setLike,
  deleteComment,
}) => {
  const onSubmit = ({ text, author }) => {
    addComment(v4(), text, author, false, 0, +isOpened);
  };
  return (
    <Container isOpened={isOpened}>
      <Img src={img} />
      <Note label="Акция" value={name} />
      <Note
        label="Описание"
        value={isOpened ? desc : `${desc.slice(0, 200)}...`}
      />
      <Note label="Дата проведения" value={time} />
      <NavLink to={`/share/${isOpened ? "" : id}`}>
        <Button>
          {isOpened
            ? "Вернуться на страницу акций"
            : "Перейти на страницу акции"}
        </Button>
      </NavLink>
      {isOpened && (
        <Comments>
          {comment.map((comment) => (
            <StyledComment
              onRemove={() => deleteComment(+isOpened, comment.id)}
              onLike={() => setLike(+isOpened, comment.id)}
              {...comment}
            />
          ))}
        </Comments>
      )}
      {isOpened && <ShareForm onSubmit={onSubmit} />}
    </Container>
  );
};
