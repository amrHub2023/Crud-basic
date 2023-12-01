import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoutes = () => {

    const {isAuthenticate} = useAuth()
    if (!isAuthenticate) return <Navigate to="/login"/>
    return <Outlet/>
};