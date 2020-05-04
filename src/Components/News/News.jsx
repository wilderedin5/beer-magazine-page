import React from 'react';
import OneNews from './OneNews/OneNews';

const News = (props) => {
    return (
        <div>
            {
                props.news.map(news => <OneNews {...news} />)
            }
        </div>
    )
}

export default News;