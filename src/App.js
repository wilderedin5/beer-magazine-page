import React from 'react';
import style from './App.module.scss';
import HeaderContainer from './Components/Header/HeaderContainer';
import Footer from './Components/Footer/Footer';
import ProductPageContainer from './Components/ProductPage/ProductPageContainer';
import { Route } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';
import cn from 'classnames';

const App = () => {
  return (
    <div className={cn(style.app,style.container)}>
        <div className={style.header}>
          <HeaderContainer />
        </div>
        <div className={style.content}>      
            <Route path="/cart" render={() => <CartContainer /> } />
            <Route exact path="/" render={() => <ProductPageContainer /> } />
        </div>
        <div className={style.footer}> 
          <Footer />
        </div>
    </div>

  );
}

export default App;
