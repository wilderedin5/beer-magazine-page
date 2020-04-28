import { beerAPI } from "../API/API";

const ADD_BEERS = 'product-reducer/ADD_BEERS';
const ADD_ITEM_TO_CART = 'product-reducer/ADD_ITEM_TO_CART';
const DELETE_ITEM_FROM_CART = 'product-reducer/DELETE_ITEM_FROM_CART';

let initialState = {
    beers: [],
    cart: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BEERS:
            return {
                ...state,
                beers: [...state.beers, ...action.beers]
            }
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.beer]
            }
        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter( item => 
                    item.id !== action.beerId
                )
            }
        default:
            return state
    }
}

export const addBeers = (beers) => ({
    type: ADD_BEERS,
    beers
});

export const successAddedItemToCart = (beer) => ({
    type: ADD_ITEM_TO_CART,
    beer
});

export const deleteItemFromCart = (beerId) => ({
    type: DELETE_ITEM_FROM_CART,
    beerId
})

export const addItemToCart = (beerId) => (dispatch) => {
    beerAPI.getOneBeer(beerId).then( response => {
        dispatch(successAddedItemToCart(response.data));
    });
}

export const getBeersFromAPI = () => (dispatch) => {
    beerAPI.getBeers().then( response => {
        dispatch(addBeers(response.data));
    })
}

export default productReducer;