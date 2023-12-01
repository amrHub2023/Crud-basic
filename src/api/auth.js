import axios from './setCredentials'

const API = 'http://localhost:3000'

export const registerRequest = user => axios.post(`/register`,user);

export const LoginRequest = user => axios.post(`/login`,user);

//Verificacion del token desde el backend
export const verifyToken = () => 
axios.get("/verifyToken");




// const API = 'http://localhost:3000/api'