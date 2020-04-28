import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={style.header}>
            <NavLink to="/cart" className={style.link} activeClassName={style.activeLink}>
                <div className={style.cart}>
                    Корзина
                </div>
            </NavLink>
            <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
                Главная
            </NavLink>
        </div>
    )
}

export default Header;