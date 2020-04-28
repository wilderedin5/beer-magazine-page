import * as axios from "axios";

export const beerAPI = {
    getBeers(){
        return axios.get("https://api.punkapi.com/v2/beers");
    },
    getOneBeer(beerId){
        return axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
    }
}
