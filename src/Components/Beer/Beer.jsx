import React from 'react';
import style from './Beer.module.scss';
import { Button } from 'antd';

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
                <Button className={style.beerBtn} type="primary" onClick={() => addItemToCart(beerId)}>Добавить в корзину</Button>
            :
                <Button className={style.beerBtn} type="primary" onClick={() => deleteItemFromCart(beerId)}>Удалить из корзины</Button>
            }
        </div>
    )
}

export default Beer;