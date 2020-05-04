import React from 'react';
import style from './OneNews.module.scss';

const OneNews = (props) => {
    return (
        <div className={style.newsItem}>
            <div><b>Тема:</b> {props.theme}</div>
            <div>{props.newsText}</div>
            <div><b>Автор:</b> {props.authorName}</div>
            <div><b>Категория:</b> {props.category}</div>
            <button onClick={() => props.deleteNews(props.id)}>Удалить новость</button>
        </div>
    )
}

export default OneNews;