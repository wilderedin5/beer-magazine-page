import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./product-reducer";
import ThunkMiddleWare from 'redux-thunk';
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    productPage: productReducer,
    cart: cartReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;

