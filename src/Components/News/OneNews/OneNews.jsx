import React from 'react';
import style from './OneNews.module.scss';
import Stars from './Stars/Stars';
import { NavLink } from 'react-router-dom';

const OneNews = (props) => {
    return (
        <div className={style.newsItem}>
            <div><b>Тема:</b> {props.theme}</div>
            <div>{props.newsText}</div>
            <div><b>Автор:</b> {props.authorName}</div>
            <div><b>Категория:</b> {props.category}</div>
            <button onClick={() => props.deleteNews(props.id)}>Удалить новость</button>
            <Stars id={props.id} starSelected={props.starSelected} totalStars={props.totalStars} changeNewsRating={props.changeNewsRating} />
            { !props.newsOpened ?
                <NavLink to={`/news/${props.id}`}>
                    <button>Перейти на страницу акции</button>
                </NavLink>
                :
                <NavLink to="/news">
                    <button>Вернуться на страницу акций</button>
                </NavLink>
            }
        </div>
    )
}

export default OneNews;