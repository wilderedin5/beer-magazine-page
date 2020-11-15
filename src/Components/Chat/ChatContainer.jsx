import { connect } from "react-redux";
import {
  addMessage,
  toggleLike,
  deleteMessage,
  eraseChat,
} from "../../redux/chat-reducer";
import Chat from "./Chat";

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
});

export default connect(mapStateToProps, {
  addMessage,
  toggleLike,
  deleteMessage,
  eraseChat,
})(Chat);
