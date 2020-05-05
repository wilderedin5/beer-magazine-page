import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./product-reducer";
import ThunkMiddleWare from 'redux-thunk';
import cartReducer from "./cart-reducer";
import newsReducer from "./news-reducer";
import chatReducer from "./chat-reducer";
import {reducer as formReducer} from 'redux-form';
import sharesReducer from "./shares-reducer";

let reducers = combineReducers({
    productPage: productReducer,
    cart: cartReducer,
    form: formReducer,
    news: newsReducer,
    chat: chatReducer,
    shares: sharesReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;

