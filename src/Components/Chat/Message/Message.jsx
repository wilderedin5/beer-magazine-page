import React from 'react';
import style from './Message.module.scss';
import { Comment, Tooltip } from 'antd';
import {DislikeOutlined,LikeOutlined,DislikeFilled} from "@ant-design/icons";


const Message = (props) => {
    const actions = [
        !props.liked ?
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    {React.createElement(props.liked === false ? LikeOutlined : LikeOutlined, {
                        onClick: () => props.toggleLikeMessage(props.id, true)
                    })}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>
            :
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                    {React.createElement(
                        props.liked === true ? DislikeFilled : DislikeOutlined,
                        {
                            onClick: () => props.toggleLikeMessage(props.id, false)
                        }
                    )}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>
    ];
    return (
        <Comment className={style.message} actions={actions} author={<a>{props.authorName}</a>} content={<p>{props.messageText}</p>} />
    )
}

export default Message;


