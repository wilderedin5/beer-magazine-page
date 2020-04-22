import axios from "axios";

export const beerAPI = {
    getBeer(){
        return axios.get("https://api.punkapi.com/v2/beers");
    }
}
