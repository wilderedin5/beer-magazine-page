import { connect } from 'react-redux';
import Chat from './Chat';
import {addMessageToChat,toggleLikeMessage,deleteMessageFromMessage} from '../../redux/chat-reducer';

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps,{addMessageToChat,toggleLikeMessage,deleteMessageFromMessage})(Chat);