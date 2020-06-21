import React from 'react';
import Star from './Star/Star';
import style from './Stars.module.scss';

const Stars = ({ totalStars, id, starSelected, changeNewsRating }) => (
    <div className={style.stars}>
        {
            [...Array(totalStars)].map((star, index) => <Star key={index} id={id} index={index} changeNewsRating={changeNewsRating} selected={index < starSelected} />)
        }
    </div>
)

export default Stars;