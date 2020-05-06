import React from 'react';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';
import { v4 } from 'uuid';

const News = (props) => {
    const newsId = props.match.params.id;
    const onSubmit = (formData) => {
        props.addNews(v4(), formData.newsText, formData.theme, formData.authorName, formData.category)
    }

    return (
        <div>
            {!newsId ?
                props.news.map(news => <OneNews {...news} deleteNews={props.deleteNews} totalStars={props.totalStars} changeNewsRating={props.changeNewsRating} />)
                :
                props.news.filter(news => newsId === String(news.id)).map(news => <OneNews {...news} newsOpened={newsId}
                    deleteNews={props.deleteNews} totalStars={props.totalStars} changeNewsRating={props.changeNewsRating} />)
            }
            {!newsId &&
                <NewsForm onSubmit={onSubmit} />
            }
        </div>
    )
}

export default News;