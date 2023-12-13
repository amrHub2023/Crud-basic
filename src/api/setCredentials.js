import axios from "axios";

const instance = axios.create(
    {
        baseURL:"http://localhost:3000"||  import.meta.env.VITE_API_URL,
        withCredentials:true
    }
);
export default instance