import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, LoginRequest, verifyToken } from "../api/auth";
import Cookies from "js-cookie";


 
 export const AuthContext = createContext ();

 export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de AuthProvider");
    }
    return context;
 };


 export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    // para verificar si el usuario esta autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //Registro del usuario

    const signup = async(user) => {
    try {
        const res =await registerRequest(user);        
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
        console.log(error);        
    }   
        
    }; 
 
const signin = async(user) => {
try {
    const res = await LoginRequest(user);
    setUser(res.data);
    setIsAuthenticated(true);
    
} catch (error) { console.log(error);    

}
};
useEffect ( () => {
  async function verifyLogin() {
    const cookie = Cookies.get();
    if (cookie.token) {
try {
    const res = await verifyToken(cookie.token)

} catch (error) {
    console.log(error)
 }
}

  } 
  verifyLogin();
},[]);


    return <AuthContext.Provider 
            value={{ signup, signin, user,  isAuthenticated, }}>
            {children}
            </AuthContext.Provider>;

    
 };

//no es necesario

 // useEffect( () => {
//     if (errors.length > 0) {
//         const timer = setTimeout( () => {
//             setErrors([])
//         },3000)
//         return () => clearTimeout(timer)
//     }

// },[errors]);