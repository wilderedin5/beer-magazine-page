import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={style.header}>
            <NavLink to="/cart" activeClassName={style.activeLink}>
                <div className={style.cart}>
                    корзина
                </div>
            </NavLink>
            <NavLink exact to="/" activeClassName={style.activeLink}>
                Главная
            </NavLink>
        </div>
    )
}

export default Header;