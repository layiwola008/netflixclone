import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://layinetflix.herokuapp.com/api/"
})