import React from 'react';
import style from './Star.module.scss';

const Star = ({id,index,changeNewsRating,selected}) => {
    return (
        <div onClick={() => changeNewsRating(id, index + 1)} className={selected ? style.starSelected : style.star}>&#9733;</div>
    )
}

export default Star;