import React from 'react';
import Message from './Message/Message';
import ChatForm from './ChatForm/ChatForm';
import {v4} from 'uuid';

const Chat = (props) => {
    const onSubmit = (formData) => {
        props.addMessageToChat(v4(), formData.authorName, formData.messageText, null, 0);
    }

    return (
        <div>
            {
                props.messages.map(message => <Message {...message} toggleLikeMessage={props.toggleLikeMessage} />)
            }
            <ChatForm onSubmit={onSubmit} />
        </div>
    )
}

export default Chat;