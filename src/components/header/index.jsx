import { connect } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Menu } from "antd";
import { Button } from "../common/type";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartLink = styled(Button)`
  position: relative;
  color: #fff;

  :before {
    content: '${(p) => p.count}';
    position: absolute;
    top: -6px;
    left: -8px;
    background: red;
    padding: 2px 6px;
    border-radius: 50%;
    font-size: 8px;
  }
`;

const MenuItem = ({ to, children, ...rest }) => (
  <Menu.Item {...rest}>
    <NavLink to={`/${to}`} activeClassName="active">
      {children}
    </NavLink>
  </Menu.Item>
);

const Cart = ({ cartItems }) => (
  <CartLink to="/cart" as={NavLink} count={cartItems.length}>
    <ShoppingCartOutlined />
  </CartLink>
);

const Header = ({ cartItems }) => (
  <Container>
    <Menu theme="dark" mode="horizontal">
      <MenuItem to="">Главная</MenuItem>
      <MenuItem to="news">Новости пивоварения</MenuItem>
      <MenuItem to="chat">Чат пивоварения</MenuItem>
      <MenuItem to="share">Акции</MenuItem>
      <MenuItem to="contacts">Контакты</MenuItem>
    </Menu>
    <Cart cartItems={cartItems} />
  </Container>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cart,
});

export default connect(mapStateToProps, {})(Header);
