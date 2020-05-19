import React from 'react';
import style from './Share.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { Button } from 'antd';
import CommentShare from './CommentShare/CommentShare';
import ShareForm from './ShareForm/ShareForm';
import { v4 } from 'uuid';

const Share = (props) => {
    const onSubmit = (formData) => {
        props.addCommentToShares(v4(), formData.text, formData.name, false, 0, +props.shareOpened);
    }
    return (
        <div className={cn(style.share, { [style.shareOpened]: props.shareOpened })}>
            <div className={style.shareImage}>
                <img src={props.imageShare} alt="" />
            </div>
            <div><b>Акция: </b>{props.shareName}</div>
            <div><b>Описание: </b>{props.shareOpened ? props.descShareFull : props.descShare}</div>
            <div><b>Дата проведения: </b>{props.timeShare}</div>
            {!props.shareOpened ?
                <NavLink to={`/share/${props.id}`}>
                    <Button type="primary">Перейти на страницу акции</Button>
                </NavLink>
                :
                <NavLink to="/share">
                    <Button type="primary">Вернуться на страницу акций</Button>
                </NavLink>
            }
            <div className={style.comments}>
                {props.shareOpened &&
                    props.comment.map(comment => <CommentShare deleteCommentOfShares={props.deleteCommentOfShares} shareId={props.shareOpened} toggleLikeCommentOfShares={props.toggleLikeCommentOfShares} {...comment} />)
                }
            </div>
            {props.shareOpened &&
                <ShareForm onSubmit={onSubmit} />
            }
        </div>
    )
}

export default Share;