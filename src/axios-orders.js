import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-21f9e.firebaseio.com/'
});

export default instance;