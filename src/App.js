import React from 'react';
import style from './App.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductPageContainer from './Components/ProductPage/ProductPageContainer';
import { Route } from 'react-router-dom';
import CartContainer from './Components/Cart/CartContainer';

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.content}>      
            <Route path="/cart" render={() => <CartContainer /> } />
            <Route exact path="/" render={() => <ProductPageContainer /> } />
        </div>
        <div className={style.footer}> 
          <Footer />
        </div>  
      </div>
    </div>

  );
}

export default App;
