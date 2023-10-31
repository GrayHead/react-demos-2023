import axios, {request} from "axios";

import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request => {
    request.headers['x-rapidapi-key'] = '48284f5d5b50ec0c8659bb066fde2de0'
    return request
})


export {
    axiosService
}