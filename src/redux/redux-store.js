import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from "./product-reducer";
import ThunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    productPage: productReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleWare));

export default store;

