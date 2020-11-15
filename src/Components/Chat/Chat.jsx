import React from "react";
import { v4 } from "uuid";
import { Button } from "antd";
import styled from "@emotion/styled";
import Message from "./Message/Message";
import ChatForm from "./ChatForm/ChatForm";

const ChatPanel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Chat = ({
  eraseChat,
  addMessage,
  toggleLike,
  deleteMessage,
  messages,
}) => {
  const onSubmit = ({ authorName, messageText }) => {
    addMessage(v4(), authorName, messageText, null, 0);
  };

  return (
    <div>
      {messages.map((message) => (
        <Message
          {...message}
          toggleLike={toggleLike}
          deleteMessage={deleteMessage}
        />
      ))}
      <ChatPanel>
        <ChatForm onSubmit={onSubmit} />
        <Button onClick={() => eraseChat()} type="primary">
          Очистить чат
        </Button>
      </ChatPanel>
    </div>
  );
};

export default Chat;
