import React from "react";
import { Comment as BaseComment, Tooltip } from "antd";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const Comment = styled(BaseComment)`
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const Message = (props) => {
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {React.createElement(props.liked ? DislikeFilled : LikeOutlined, {
          onClick: () => props.toggleLike(props.id, !props.liked),
        })}
      </Tooltip>
      <span className="comment-action">{props.likeCount}</span>
    </span>,
    <span onClick={() => props.deleteMessage(props.id)}>
      Удалить сообщение
    </span>,
  ];
  return (
    <Comment
      actions={actions}
      author={<a>{props.authorName}</a>}
      content={<p>{props.messageText}</p>}
    />
  );
};

export default Message;
