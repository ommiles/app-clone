import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://app-clone-backend.herokuapp.com'
})

export default instance;