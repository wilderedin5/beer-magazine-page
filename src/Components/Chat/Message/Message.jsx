import React from 'react';
import style from './Message.module.scss';

const Message = (props) => {
    return (
        <div className={style.message}>
            <div>{props.messageText}</div>
            <div className={style.messageMeta}>
                <div>{props.authorName}</div>
                <div className={style.likeBox}>
                    <div>{props.likeCount} Лайков</div>
                    { props.liked ?
                        <button onClick={() => props.toggleLikeMessage(props.id,false)}>Убрать лайк</button>
                        :
                        <button onClick={() => props.toggleLikeMessage(props.id,true)}>Поставить лайк</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Message;