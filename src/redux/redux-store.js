import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./product-reducer";
import ThunkMiddleWare from "redux-thunk";
import cartReducer from "./cart-reducer";
import newsReducer from "./news-reducer";
import chatReducer from "./chat-reducer";
import { reducer as formReducer } from "redux-form";
import sharesReducer from "./shares-reducer";
import contactsReducer from "./contacts-reducer";

let reducers = combineReducers({
  productPage: productReducer,
  cart: cartReducer,
  form: formReducer,
  news: newsReducer,
  chat: chatReducer,
  shares: sharesReducer,
  contacts: contactsReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;
