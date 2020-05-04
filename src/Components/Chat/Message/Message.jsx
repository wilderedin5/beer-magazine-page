import React from 'react';
import style from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div>{props.messageText}</div>
            <div className={style.messageMeta}>
                <div>{props.authorName}</div>
                <div>{props.likeCount} Лайков</div>
            </div>
        </div>
    )
}

export default Message;