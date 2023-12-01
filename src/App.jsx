
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { HomePage } from "./pages/homePage"; 
import {PostPage} from "./pages/PostPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import NavbarPublic from "./components/NavbarPublic";
import NavbarPrivate from "./components/NavbarPrivate";


export const  App = ()=> {  
  return (
    <AuthProvider>
        <BrowserRouter>
        <NavbarPublic/>
          <Routes>            
            <Route path="/" element = {<HomePage />}/>
            <Route path="/Login" element = {<LoginPage />}/>
            <Route path="/Register" element = {<RegisterPage/> }/>  

            <Route element = {<PrivateRoutes/>}>
            
                <Route path="/Add-Task" element = {<h1>new task </h1> }/>        
                <Route path="/Post" element = {<PostPage />}/>
                <Route path="/Tasks/:id" element = {<h1>Update </h1> }/>
                <Route path="/Profile" element = {<ProfilePage/>}/>    
            </Route>     
          </Routes>
        </BrowserRouter>
     </AuthProvider>
    
  );
};

