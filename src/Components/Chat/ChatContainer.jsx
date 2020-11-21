import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import {
  addMessage,
  setLike,
  deleteMessage,
  eraseChat,
} from "../../redux/chat-reducer";
import Message from "./Message";
import ChatForm from "./ChatForm";

const Chat = ({ eraseChat, addMessage, setLike, deleteMessage, messages }) => {
  const onSubmit = ({ author, text }) => {
    addMessage(v4(), author, text, null, 0);
  };

  return (
    <div>
      {messages.map((message) => (
        <Message {...message} setLike={setLike} deleteMessage={deleteMessage} />
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
