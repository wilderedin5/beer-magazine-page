import { beerAPI } from "../API/API";

const ADD_BEERS = 'product-reducer/ADD_BEERS';

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
        default:
            return state
    }
}

export const addBeers = (beers) => ({
    type: ADD_BEERS,
    beers
});

export const getBeersFromAPI = () => (dispatch) => {
    beerAPI.getBeers().then( response => {
        dispatch(addBeers(response.data));
    })
}

export default productReducer;