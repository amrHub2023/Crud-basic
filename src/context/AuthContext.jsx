import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, LoginRequest,  verifyToken,} from "../api/auth";
import Cookies from "js-cookie";
// verifyTokenRequest

 
  const AuthContext = createContext ();

 export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de AuthProvider");
    }
    return context;
 };


 export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    // para verificar si el usuario esta autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors,setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    //Registro del usuario

    const signup = async(user) => {
    try {
        const res = await registerRequest(user);        
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
        setErrors(error.response.data) 
        console.log(error);        
        }
        
    }          
 
const signin = async(user) => {
try {
    const res = await LoginRequest(user);
    console.log('Desde signin el valor de res, en LoginRequest',res);    
    setUser(res.data);
    setIsAuthenticated(true);    
} catch (error) { 
    if (Array.isArray(error.response.data)){
        return setErrors(error.response.data)
    }
    setErrors([error.response.data.message])
    // setErrors(error.response.data);    
}
};

//VVolver a verificar este Logout. Se repite en auth.controller
const logout = () => { 
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

useEffect( () => {
    if (errors.length > 0 ) {
        const timer = setTimeout(() => {
            setErrors([]);
        },4000);
        return () => clearTimeout(timer);
    }
},[errors]);





//Opcion user. VerifyTokenRequest 
useEffect ( () => {
async function checkLogin () {
    const cookies = Cookies.get();
            //verifica si existe un token
    console.log('Permite ver que es lo que viene del front, que datos trae en : ')        
    if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);        
        return setUser(null);
            //verifica que el token sea valido
            //const res = await verifyTokenRequest(cookies.token)
    }   try {
            //se envia el token al backend para verificar si no se cargo manualmente el token.
            const res = await verifyToken(cookies.token)
            console.log('el valor de verifyTokenRequest es ',verifyToken)
            console.log('el valor de la const res = await verifyTokenRequest es: ',res)
            console.log('verifica lo que viene de Res.data: ',res.data)
                    //verifica si hay algun dato
            if (!res.data) {
                setIsAuthenticated(false);
                setLoading(false);                       
                return;
            }                        
            setIsAuthenticated(true)
            setUser(res.data);
            setLoading(false);
        } catch (error) {
            console.log('desde Authcontext en verificar el ',error);
            setIsAuthenticated(false)
            setUser(null)
            setLoading(false);
        }
    }
checkLogin();
},[]);


    return (
            <AuthContext.Provider 
            value={{ 
              signup, signin,  user,  isAuthenticated,errors, loading, logout }}>
            {children}
            </AuthContext.Provider>);
 };

export default AuthContext;

// logout


//no es necesario

 // useEffect( () => {
//     if (errors.length > 0) {
//         const timer = setTimeout( () => {
//             setErrors([])
//         },3000)
//         return () => clearTimeout(timer)
//     }

// },[errors]);



//permite desde el backend verificar si el usuario esta autenticado. Al principio. Se comenta, porque checklogin es mas completo
// useEffect ( () => {
//   async function verifyLogin() {
//     const cookie = Cookies.get();
//     if (cookie.token) {
// try {
//     const res = await verifyToken(cookie.token)

// } catch (error) {
//     console.log(error)
//  }
// }
//   } 
//   verifyLogin();
// },[]);
