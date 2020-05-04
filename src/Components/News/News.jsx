import React from 'react';
import OneNews from './OneNews/OneNews';
import NewsForm from './NewsForm/NewsForm';
import {v4} from 'uuid';

const News = (props) => {
    const onSubmit = (formData) => {
        props.addNews(v4(),formData.newsText,formData.theme,formData.authorName,formData.category)
    }

    return (
        <div>
            {
                props.news.map(news => <OneNews {...news} deleteNews={props.deleteNews} totalStars={props.totalStars} changeNewsRating={props.changeNewsRating} />)
            }
            <NewsForm onSubmit={onSubmit} />
        </div>
    )
}

export default News;