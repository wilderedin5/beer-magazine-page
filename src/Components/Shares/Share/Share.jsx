import React from 'react';
import style from './Share.module.scss';

const Share = (props) => {
    return (
        <div className={style.share}>
            <div>{props.shareName}</div>
            <div><b>Описание: </b>{props.descShare}</div>
            <div><b>Дата проведения: </b>{props.timeShare}</div>
        </div>
    )
}

export default Share;