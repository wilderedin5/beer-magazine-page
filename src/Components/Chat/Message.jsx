import React from "react";
import { Comment as BaseComment, Tooltip } from "antd";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const Comment = styled(BaseComment)`
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const Message = ({
  liked,
  id,
  likeCount,
  author,
  text,
  deleteMessage,
  setLike,
}) => {
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {React.createElement(liked ? DislikeFilled : LikeOutlined, {
          onClick: () => setLike(id, !liked),
        })}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={() => deleteMessage(id)}>Удалить сообщение</span>,
  ];
  return (
    <Comment
      actions={actions}
      author={<a>{author}</a>}
      content={<p>{text}</p>}
    />
  );
};

export default Message;
