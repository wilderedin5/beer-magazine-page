import React from "react";
import style from "./App.module.scss";
import HeaderContainer from "./components/header";
import ProductPageContainer from "./components/product-page";
import { Route } from "react-router-dom";
import CartContainer from "./components/cart";
import NewsContainer from "./components/news";
import ChatContainer from "./components/chat";
import SharesContainer from "./components/shares";
import ContactsContainer from "./components/contacts";
import { Layout } from "antd";

const App = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <HeaderContainer />
      </Header>
      <Content className={style.content}>
        <Route path="/cart" render={() => <CartContainer />} />
        <Route path="/news/:id?" render={() => <NewsContainer />} />
        <Route path="/chat" render={() => <ChatContainer />} />
        <Route path="/share/:id?" render={() => <SharesContainer />} />
        <Route path="/contacts" render={() => <ContactsContainer />} />
        <Route exact path="/" render={() => <ProductPageContainer />} />
      </Content>
    </Layout>
  );
};

export default App;
