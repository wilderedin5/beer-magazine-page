import React from 'react';
import OneNews from './OneNews/OneNews';

const News = (props) => {
    return (
        <div>
            {
                props.news.map(news => <OneNews {...news} deleteNews={props.deleteNews} />)
            }
        </div>
    )
}

export default News;