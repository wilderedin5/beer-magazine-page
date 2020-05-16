import React from 'react';
import Message from './Message/Message';
import ChatForm from './ChatForm/ChatForm';
import { v4 } from 'uuid';
import { Button } from 'antd';
import style from './Chat.module.scss';

const Chat = (props) => {
    const onSubmit = (formData) => {
        props.addMessageToChat(v4(), formData.authorName, formData.messageText, null, 0);
    }

    return (
        <div>
            {
                props.messages.map(message => <Message {...message} toggleLikeMessage={props.toggleLikeMessage} deleteMessageFromChat={props.deleteMessageFromChat} />)
            }
            <div className={style.chatPanel}>
                <ChatForm onSubmit={onSubmit} />
                <Button onClick={() => props.deleteAllMessagesFromChat()} type="primary">Очистить чат</Button>
            </div>
        </div>
    )
}

export default Chat;