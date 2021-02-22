import { connect } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Badge, Menu } from "antd";
import { Button } from "../common/type";

const Container = styled.div`
  position: relative;
`;

const CartContainer = styled.div`
  position: absolute;
  right: 0;
`;

const MenuItem = ({ to, children, ...rest }) => (
  <Menu.Item {...rest}>
    <NavLink to={`/${to}`} activeClassName="active">
      {children}
    </NavLink>
  </Menu.Item>
);

const Cart = ({ cart }) => (
  <CartContainer>
    <Menu.Item>
      <NavLink to="/cart">
        <Badge count={cart.length} showZero>
          <Button>
            <ShoppingCartOutlined />
          </Button>
        </Badge>
      </NavLink>
    </Menu.Item>
  </CartContainer>
);

const Header = ({ cart }) => (
  <Container>
    <Menu theme="dark" mode="horizontal">
      <Cart cart={cart} />
      <MenuItem to="">Главная</MenuItem>
      <MenuItem to="news">Новости пивоварения</MenuItem>
      <MenuItem to="chat">Чат пивоварения</MenuItem>
      <MenuItem to="share">Акции</MenuItem>
      <MenuItem to="contacts">Контакты</MenuItem>
    </Menu>
  </Container>
);

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, {})(Header);
