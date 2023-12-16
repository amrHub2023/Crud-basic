import axios from "./setCredentials";

export const getPostsRequest = async() => axios.get("/posts");


export const getPostRequest = async(id) => axios.get(`/posts/${id}`);

export const createPostRequest = async(post) => axios.post("/posts",post);


export const deletePostRequest = async(id) => axios.delete(`/posts/${id}`);

export const updatePostRequest = async(id,post) => axios.put(`/posts/${id}`,post);

export const getUserRequest = async() => axios.get("/users");
   