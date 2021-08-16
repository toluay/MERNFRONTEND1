import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchPosts = () => API.get('/post');
export const createPost = (newPost) => API.post('/post', newPost);
export const likePost = (id) => API.patch(`/post/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/post/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/post/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);