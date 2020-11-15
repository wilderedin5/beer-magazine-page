import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge, Menu } from "antd";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
`;

const Cart = styled.div`
  position: absolute;
  right: 0;
`;

const Header = (props) => (
  <Container>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Cart>
        <Menu.Item>
          <NavLink to="/cart">
            <Badge count={props.cart.length} showZero>
              <Button type="primary">
                <ShoppingCartOutlined />
              </Button>
            </Badge>
          </NavLink>
        </Menu.Item>
      </Cart>

      <Menu.Item key="1">
        <NavLink exact to="/">
          Главная
        </NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/news">Новости пивоварения</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to="/chat">Чат пивоварения</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to="/share">Акции</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to="/contacts">Контакты</NavLink>
      </Menu.Item>
    </Menu>
  </Container>
);

export default Header;
