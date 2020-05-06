import React from 'react';
import style from './Share.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Share = (props) => {
    return (
        <div className={cn(style.share, {[style.shareOpened]: props.shareOpened})}>
            <div className={style.shareImage}>
                <img src={props.imageShare} alt="" />
            </div>
            <div><b>Акция: </b>{props.shareName}</div>
            <div><b>Описание: </b>{props.descShare}</div>
            <div><b>Дата проведения: </b>{props.timeShare}</div>
            { !props.shareOpened ?
                <NavLink to={`/share/${props.id}`}>
                    <button>Перейти на страницу акции</button>
                </NavLink>
                :
                <NavLink to="/share">
                    <button>Вернуться на страницу акций</button>
                </NavLink>
            }
        </div>
    )
}

export default Share;