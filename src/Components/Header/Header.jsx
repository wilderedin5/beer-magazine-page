import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const Header = (props) => {
    return (
        <div className={style.header}>
            <NavLink to="/cart" className={cn(style.link, style.cartLink)} activeClassName={style.activeLink}>
                <div className={style.cart}>
                    Корзина
                    {props.cart &&
                        <div className={style.cartCount}>{props.cart.length}</div>
                    }
                </div>
            </NavLink>
            <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
                Главная
            </NavLink>
            <NavLink exact to="/news" className={style.link} activeClassName={style.activeLink}>
                Новости пивоварения
            </NavLink>
        </div>
    )
}

export default Header;