import axios from "./setCredentials"  

const API = 'http://localhost:3000'

export const registerRequest = (user) => axios.post(`/register`,user);

export const LoginRequest = (user) => axios.post(`/login`,user);

//Verificacion del token desde el backend
//se relaciona con auth.routes en el bckend

export const verifyToken = () => 
axios.get("/auth/verify");

// export const verifyTokenRequest= async () => 
// axios.get("/auth/verify");




// const API = 'http://localhost:3000/api'