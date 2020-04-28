import React from 'react';
import style from './Beer.module.scss';

const Beer = ({image,name,description,date,abv,tips,contributed,addItemToCart,beerId,deleteItemFromCart}) => {
    return (
        <div className={style.beer}>
            <div className={style.beerImage}>
                <img src={image} alt="" />
            </div>
            <div><b>Название:</b> {name}</div>
            <div><b>Описание:</b> {description}</div>
            <div><b>Сварен:</b> {date}</div>
            <div><b>Крепость:</b> {abv}</div>
            <div><b>Советы от пивоваров:</b> {tips}</div>
            <div><b>Поставщик:</b> {contributed}</div>
            { addItemToCart ?
                <button className={style.beerBtn} onClick={() => addItemToCart(beerId)}>Добавить в корзину</button>
            :
                <button className={style.beerBtn} onClick={() => deleteItemFromCart(beerId)}>Удалить из корзины</button>
            }
        </div>
    )
}

export default Beer;