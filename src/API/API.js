import * as axios from "axios";

export const beerAPI = {
  getBeers(page, pageSize, abv = 0) {
    return axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize}&abv_gt=${abv}`
    );
  },
  getOneBeer(id) {
    return axios.get(`https://api.punkapi.com/v2/beers/${id}`);
  },
};
