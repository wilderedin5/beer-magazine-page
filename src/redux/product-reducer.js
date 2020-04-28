import { beerAPI } from "../API/API";

const ADD_BEERS = 'product-reducer/ADD_BEERS';
const SET_CURRENT_PAGE = 'product-reducer/SET_CURRENT_PAGE';

let initialState = {
    beers: [],
    pageSize: 10,
    totalItemsCount: 1000,
    currentPage: 1
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BEERS:
            return {
                ...state,
                beers: [...action.beers]
            }
        case SET_CURRENT_PAGE:
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        default:
            return state
    }
}

export const addBeers = (beers) => ({
    type: ADD_BEERS,
    beers
});

export const setCurrentPage = (currentPage) => {
    return ({
        type: SET_CURRENT_PAGE,
        currentPage
    });
};

export const getBeersFromAPI = (page, pageSize) => (dispatch) => {
    beerAPI.getBeers(page, pageSize).then(response => {
        dispatch(addBeers(response.data));
    });
}

export default productReducer;