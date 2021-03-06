import { beerAPI } from "../API/API";
import { formatBeers } from "../helpers/beer-formater";

const ADD_BEERS = "product-reducer/ADD_BEERS";
const SET_CURRENT_PAGE = "product-reducer/SET_CURRENT_PAGE";
const SET_ABV_FILTER = "product-reducer/SET_ABV_FILTER";

let initialState = {
  beers: [],
  pageSize: 10,
  total: 200,
  currentPage: 1,
  abvFilter: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BEERS:
      return {
        ...state,
        beers: [...action.beers],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_ABV_FILTER:
      return {
        ...state,
        abvFilter: action.abvFilter,
      };
    default:
      return state;
  }
};

export const addBeers = (beers) => ({
  type: ADD_BEERS,
  beers,
});

export const changePage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setAbvFilter = (abvFilter) => ({
  type: SET_ABV_FILTER,
  abvFilter,
});

export const getBeers = (page, pageSize, abv) => (dispatch) => {
  beerAPI.getBeers(page, pageSize, abv).then((response) => {
    const formattedResponse = formatBeers(response.data);
    dispatch(addBeers(formattedResponse));
  });
};

export default productReducer;
