import { beerAPI } from "../API/API";
import { formatBeers } from "../helpers/beer-formater";

const MANAGE_CART_ITEM = "cart-reducer/MANAGE_CART_ITEM";

let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANAGE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.some(({ id }) => id === action.id)
          ? state.cart.filter(({ id }) => id !== action.id)
          : [...state.cart, ...action.beer],
      };
    default:
      return state;
  }
};

export const manage = (id, beer) => ({
  type: MANAGE_CART_ITEM,
  beer,
  id,
});

export const manageProduct = (id) => (dispatch) => {
  beerAPI.getOneBeer(id).then((response) => {
    const formattedResponse = formatBeers(response.data);
    dispatch(manage(id, formattedResponse));
  });
};

export default cartReducer;
