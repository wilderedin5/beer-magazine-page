import React from "react";
import styled from "@emotion/styled";
import LikeIcon from "../../assets/image/like.svg";
import NoImg from "../../assets/image/NoImg.jpg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  grid-column-gap: 20px;
  border: 1px solid black;
  padding: 5px 10px;

  & + & {
    margin-top: 10px;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;

const Name = styled.span`
  color: gray;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 10px;
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
  transform: ${(p) => p.liked && "rotate(180deg)"};
`;

const ToolsContainer = styled.div`
  display: grid;
  grid-template-columns: 45px auto;
  grid-column-gap: 10px;

  span {
    cursor: pointer;
  }
`;

const Tools = ({ likeCount, onLike, onRemove, liked }) => (
  <ToolsContainer>
    <span onClick={onLike}>
      <Icon liked={liked} src={LikeIcon} />
      {likeCount}
    </span>
    <span onClick={onRemove}>Remove</span>
  </ToolsContainer>
);

export const Comment = ({ avatar, author, text, className, ...props }) => (
  <Container className={className}>
    <Avatar src={avatar || NoImg} />
    <Content>
      <Name>{author}</Name>
      <div>{text}</div>
      <Tools {...props} />
    </Content>
  </Container>
);
