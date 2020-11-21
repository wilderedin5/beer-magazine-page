import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "antd";
import { Note } from "../Common/type";
import CommentShare from "./CommentShare";
import ShareForm from "./ShareForm";

const Container = styled.div`
  border: 1px solid #000;
  flex-basis: ${(p) => (p.isOpened ? "100%" : "49%")};
  margin-bottom: 10px;
  padding: 10px;
`;

const Img = styled.div`
  width: 100%;
  height: 300px;
`;

const Comments = styled.div`
  margin-top: 10px;
`;

const Share = ({
  addComment,
  isOpened,
  descShare,
  descShareFull,
  imageShare,
  shareName,
  id,
  timeShare,
  comment,
  setLike,
  deleteComment,
}) => {
  const onSubmit = ({ text, name }) => {
    addComment(v4(), text, name, false, 0, +isOpened);
  };
  return (
    <Container isOpened={isOpened}>
      <Img src={imageShare} />
      <Note label="Акция" value={shareName} />
      <Note label="Описание" value={isOpened ? descShareFull : descShare} />
      <Note label="Дата проведения" value={timeShare} />
      <NavLink to={`/share/${isOpened ? "" : id}`}>
        <Button type="primary">
          {isOpened
            ? "Вернуться на страницу акций"
            : "Перейти на страницу акции"}
        </Button>
      </NavLink>
      <Comments>
        {isOpened &&
          comment.map((comment) => (
            <CommentShare
              deleteComment={deleteComment}
              shareId={isOpened}
              setLike={setLike}
              {...comment}
            />
          ))}
      </Comments>
      {isOpened && <ShareForm onSubmit={onSubmit} />}
    </Container>
  );
};

export default Share;
