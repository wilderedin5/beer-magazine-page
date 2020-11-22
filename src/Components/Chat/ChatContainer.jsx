import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import {
  addMessage,
  setLike,
  deleteMessage,
  eraseChat,
} from "../../redux/chat-reducer";
import { Comment } from "../Common/comment";
import ChatForm from "./ChatForm";

const StyledComment = styled(Comment)`
  border: 1px solid #000;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

const Chat = ({ eraseChat, addMessage, setLike, deleteMessage, messages }) => {
  const onSubmit = ({ author, text }) => {
    addMessage(v4(), author, text, null, 0);
  };

  return (
    <div>
      {messages.map(({ id, hasLike, ...m }) => (
        <StyledComment
          onLike={() => setLike(id, !hasLike)}
          onRemove={() => deleteMessage(id)}
          {...m}
        />
      ))}
      <ChatForm onSubmit={onSubmit} onErase={eraseChat} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps, {
  addMessage,
  setLike,
  deleteMessage,
  eraseChat,
})(Chat);
