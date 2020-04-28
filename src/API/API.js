import * as axios from "axios";

export const beerAPI = {
    getBeers(page,pageSize){
        return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${pageSize}`);
    },
    getOneBeer(beerId){
        return axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
    }
}