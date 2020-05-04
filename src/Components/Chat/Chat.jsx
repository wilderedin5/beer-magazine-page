import React from 'react';
import Message from './Message/Message';

const Chat = (props) => {
    return (
        <div>
        {
            props.messages.map(message => <Message {...message} /> )
        }
        </div>
    )
}

export default Chat;