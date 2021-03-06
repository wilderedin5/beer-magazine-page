import React from "react";
import { Layout } from "antd";
import { Route } from "react-router-dom";
import style from "./App.module.scss";
import HeaderComponent from "./components/header";
import ProductPage from "./components/product-page";
import CartPage from "./components/cart";
import NewsPage from "./components/news";
import ChatPage from "./components/chat";
import SharePage from "./components/shares";
import ContactPage from "./components/contacts";

const App = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <HeaderComponent />
      </Header>
      <Content className={style.content}>
        <Route path="/cart" render={() => <CartPage />} />
        <Route path="/news/:newsId?" render={() => <NewsPage />} />
        <Route path="/chat" render={() => <ChatPage />} />
        <Route path="/share/:shareId?" render={() => <SharePage />} />
        <Route path="/contacts" render={() => <ContactPage />} />
        <Route exact path="/" render={() => <ProductPage />} />
      </Content>
    </Layout>
  );
};

export default App;
