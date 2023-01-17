import axios from 'axios';

const API = axios.create({baseURL: 'https://pickguard-project.herokuapp.com'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token }`;
    }
    return req;
});

export const fetchPosts = (creatorId) => API.post("/posts/get", creatorId);
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (id) => API.post(`/posts/delete`, id);

export const fetchWishes = (creatorId) => API.post("/wishes/get", creatorId);
export const creatWish = (newWish) => API.post("/wishes", newWish);
export const deleteWish = (id) => API.post(`/wishes/delete`, id);

export const signUp = (registrationData) => API.post('/user/signup', registrationData);
export const signIn = (registrationData) => API.post('/user/signin', registrationData);