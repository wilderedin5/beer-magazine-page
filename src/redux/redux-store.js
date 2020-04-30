import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./product-reducer";
import ThunkMiddleWare from 'redux-thunk';
import cartReducer from "./cart-reducer";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    productPage: productReducer,
    cart: cartReducer,
    form: formReducer 
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;

