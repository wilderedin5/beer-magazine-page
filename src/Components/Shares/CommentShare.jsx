import React from "react";
import styled from "@emotion/styled";
import { Comment as BaseComment, Tooltip } from "antd";
import { LikeOutlined, DislikeFilled } from "@ant-design/icons";

const Comment = styled(BaseComment)`
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const CommentShare = ({
  liked,
  shareId,
  id,
  setLike,
  likeCount,
  deleteComment,
  name,
  text,
}) => {
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {React.createElement(liked ? DislikeFilled : LikeOutlined, {
          onClick: () => setLike(+shareId, id),
        })}
      </Tooltip>
      <span className="comment-action">{likeCount}</span>
    </span>,
    <span onClick={() => deleteComment(+shareId, id)}>Удалить сообщение</span>,
  ];
  return (
    <Comment actions={actions} author={<a>{name}</a>} content={<p>{text}</p>} />
  );
};

export default CommentShare;
