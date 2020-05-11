import React from 'react';
import style from './OneNews.module.scss';
import Stars from './Stars/Stars';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const OneNews = (props) => {
    return (
        <div className={style.newsItem}>
            <div><b>Тема:</b> {props.theme}</div>
            <div>{props.newsOpened ? props.newsText : props.newsText.substring(0,300) + "...."}</div>
            <div><b>Автор:</b> {props.authorName}</div>
            <div><b>Категория:</b> {props.category}</div>
            <div className={style.btnLine}>
                <Button type="primary" onClick={() => props.deleteNews(props.id)}>Удалить новость</Button>
                {!props.newsOpened ?
                    <NavLink to={`/news/${props.id}`}>
                        <Button type="primary">Перейти на страницу новости</Button>
                    </NavLink>
                    :
                    <NavLink to="/news">
                        <Button type="primary">Вернуться на страницу новостей</Button>
                    </NavLink>
                }
            </div>
            <Stars className={style.stars} id={props.id} starSelected={props.starSelected} totalStars={props.totalStars} changeNewsRating={props.changeNewsRating} />
        </div>
    )
}

export default OneNews;