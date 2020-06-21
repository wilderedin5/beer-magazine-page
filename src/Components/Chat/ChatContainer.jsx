import { connect } from 'react-redux';
import Chat from './Chat';
import { addMessageToChat, toggleLikeMessage, deleteMessageFromChat, deleteAllMessagesFromChat } from '../../redux/chat-reducer';

const mapStateToProps = (state) => ({
    messages: state.chat.messages
})

export default connect(mapStateToProps, { addMessageToChat, toggleLikeMessage, deleteMessageFromChat, deleteAllMessagesFromChat })(Chat);