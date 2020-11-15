import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "antd";
import { Note } from "../../Common/type";
import CommentShare from "./CommentShare/CommentShare";
import ShareForm from "./ShareForm/ShareForm";

const Container = styled.div`
  border: 1px solid #000;
  flex-basis: ${(p) => (p.shareOpened ? "100%" : "49%")};
  margin-bottom: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 300px;
  }
`;

const Comments = styled.div`
  margin-top: 10px;
`;

const Share = (props) => {
  const onSubmit = ({ text, name }) => {
    props.addComment(v4(), text, name, false, 0, +props.shareOpened);
  };
  return (
    <Container shareOpened={props.shareOpened}>
      <ImageContainer>
        <img src={props.imageShare} alt="" />
      </ImageContainer>
      <Note label="Акция" value={props.shareName} />
      <Note
        label="Описание"
        value={props.shareOpened ? props.descShareFull : props.descShare}
      />
      <Note label="Дата проведения" value={props.timeShare} />
      <NavLink to={`/share/${props.shareOpened ? "" : props.id}`}>
        <Button type="primary">
          {props.shareOpened
            ? "Вернуться на страницу акций"
            : "Перейти на страницу акции"}
        </Button>
      </NavLink>
      <Comments>
        {props.shareOpened &&
          props.comment.map((comment) => (
            <CommentShare
              deleteComment={props.deleteComment}
              shareId={props.shareOpened}
              toggleLike={props.toggleLike}
              {...comment}
            />
          ))}
      </Comments>
      {props.shareOpened && <ShareForm onSubmit={onSubmit} />}
    </Container>
  );
};

export default Share;
