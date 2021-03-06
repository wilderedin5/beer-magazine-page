import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { manageChat, setLike, eraseChat } from "../../redux/chat-reducer";
import { Comment } from "../common/comment";
import ChatForm from "./chat-form";

const Chat = ({ eraseChat, manageChat, setLike, messages }) => {
  const onSubmit = ({ author, text }) => {
    const id = v4();
    manageChat(id, {
      id,
      author,
      text,
      liked: null,
      likeCount: 0,
    });
  };

  return (
    <div>
      {messages.map(({ id, liked, ...m }) => (
        <Comment
          onLike={() => setLike(id, !liked)}
          onRemove={() => manageChat(id)}
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
  manageChat,
  setLike,
  eraseChat,
})(Chat);
