import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Badge, Menu } from 'antd';

const Header = (props) => (
    <div className={style.header}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item className={style.cartLink}>
                <NavLink to="/cart" activeClassName={style.activeLink}>
                    <Badge count={props.cart.length} showZero>
                        <Button type="primary" className={style.cart}>
                            <ShoppingCartOutlined className={style.cartIcon} />
                        </Button>
                    </Badge>
                </NavLink>
            </Menu.Item>

            <Menu.Item key="1">
                <NavLink exact to="/" activeClassName={style.activeLink}>
                    Главная
                    </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/news" activeClassName={style.activeLink}>
                    Новости пивоварения
                    </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
                <NavLink to="/chat" activeClassName={style.activeLink}>
                    Чат пивоварения
                    </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
                <NavLink to="/share" activeClassName={style.activeLink}>
                    Акции
                    </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
                <NavLink to="/contacts" activeClassName={style.activeLink}>
                    Контакты
                    </NavLink>
            </Menu.Item>
        </Menu>
    </div>
)

export default Header;