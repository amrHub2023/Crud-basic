import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoutes = () => {

    const {loading, isAuthenticated} = useAuth()
    console.log('desde private routes')
    console.log('muestra el valor de loading. Se trae su valor desde autcontext',loading)
    console.log("muestra el valor de isAuthenticated. Se trae su valor desde AuthContext", isAuthenticated)

   
    if (loading) return  <h1>Cargando pagina... </h1>;

    if (!loading && !isAuthenticated) return <Navigate to = "/login" replace/>
    return <Outlet/>;
};

export default PrivateRoutes