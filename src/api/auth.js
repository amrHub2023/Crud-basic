import axios from "./setCredentials"  

const API = 'http://localhost:3000' || import.meta.env.VITE_API

export const registerRequest = async(user) => axios.post(`/register`,user);

export const LoginRequest = async(user) => axios.post(`/login`,user);

//Verificacion del token desde el backend
//se relaciona con auth.routes en el bckend

export const verifyTokenRequest = async() => 
axios.get(`/verify`);

// export const verifyTokenRequest= async () => 
// axios.get("/auth/verify");




// const API = 'http://localhost:3000/api'