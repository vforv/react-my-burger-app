import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://myburger-5b3bf.firebaseio.com/'
});

export default axios;
