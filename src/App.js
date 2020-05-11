import React from 'react';
import style from './App.module.scss';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import ProductPageContainer from './Components/ProductPage/ProductPageContainer';
import { Route } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';
import cn from 'classnames';
import NewsContainer from './Components/News/NewsContainer';
import ChatContainer from './Components/Chat/ChatContainer';
import SharesContainer from './Components/Shares/SharesContainer';
import ContactsContainer from './Components/Contacts/ContactsContainer';
import { Layout } from 'antd';

const App = () => {
  const { Header, Footer, Content } = Layout;
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
      <Footer>
        <Footer />
      </Footer>
    </Layout>
  );
}

export default App;
