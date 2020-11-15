import React from "react";
import styled from "@emotion/styled";
import { Comment as BaseComment, Tooltip } from "antd";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";

const Comment = styled(BaseComment)`
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const CommentShare = (props) => {
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {React.createElement(props.liked ? DislikeFilled : LikeOutlined, {
          onClick: () => props.toggleLike(+props.shareId, props.id),
        })}
      </Tooltip>
      <span className="comment-action">{props.likeCount}</span>
    </span>,
    <span onClick={() => props.deleteComment(+props.shareId, props.id)}>
      Удалить сообщение
    </span>,
  ];
  return (
    <Comment
      actions={actions}
      author={<a>{props.name}</a>}
      content={<p>{props.text}</p>}
    />
  );
};

export default CommentShare;
