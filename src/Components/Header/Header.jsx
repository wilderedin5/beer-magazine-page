import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Badge } from 'antd';

const Header = (props) => {
    return (
        <div className={style.header}>
            <NavLink to="/cart" className={cn(style.link, style.cartLink)} activeClassName={style.activeLink}>
                <Badge count={props.cart.length} showZero>
                    <Button type="primary" className={style.cart}>
                        <ShoppingCartOutlined className={style.cartIcon} />
                    </Button>
                </Badge>
            </NavLink>
            <NavLink exact to="/" className={style.link} activeClassName={style.activeLink}>
                Главная
            </NavLink>
            <NavLink to="/news" className={style.link} activeClassName={style.activeLink}>
                Новости пивоварения
            </NavLink>
            <NavLink to="/chat" className={style.link} activeClassName={style.activeLink}>
                Чат пивоварения
            </NavLink>
            <NavLink to="/share" className={style.link} activeClassName={style.activeLink}>
                Акции
            </NavLink>
            <NavLink to="/contacts" className={style.link} activeClassName={style.activeLink}>
                Контакты
            </NavLink>
        </div>
    )
}

export default Header;