import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const leagueService = {
    getAll: () => axiosService.get(urls.leagues)
}

export {
    leagueService
}