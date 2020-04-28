import { beerAPI } from "../API/API";

const ADD_ITEM_TO_CART = 'cart-reducer/ADD_ITEM_TO_CART';
const DELETE_ITEM_FROM_CART = 'cart-reducer/DELETE_ITEM_FROM_CART';

let initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
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

export default cartReducer;