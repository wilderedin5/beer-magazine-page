import React from 'react';
import style from './CommentShare.module.scss';
import { Comment, Tooltip } from 'antd';
import {DislikeOutlined,LikeOutlined,DislikeFilled} from "@ant-design/icons";


const CommentShare = (props) => {
    const actions = [
        !props.liked ?
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    {React.createElement(props.liked === false ? LikeOutlined : LikeOutlined, {
                        onClick: () => props.toggleLikeCommentOfShares(+props.shareId,props.id)
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
                            onClick: () => props.toggleLikeCommentOfShares(+props.shareId,props.id)
                        }
                    )}
                </Tooltip>
                <span className="comment-action">{props.likeCount}</span>
            </span>,
            <span onClick={() => props.toggleLikeCommentOfShares(props.shareId,props.id)}>Удалить сообщение</span>
    ];
    return (
        <Comment className={style.message} actions={actions} author={<a>{props.name}</a>} content={<p>{props.text}</p>} />
    )
}

export default CommentShare;


