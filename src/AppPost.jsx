import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { HomePage } from "./pages/homePage"; 
import PostPage from "./pages/PostPage";
import { ProfilePage } from "./pages/ProfilePage";
import  PrivateRoutes  from "./routes/PrivateRoutes";
import NavbarPost from "./components/NavbarPost";
import  PostFormPage  from "./pages/PostFormPage";
import PostUsers from "./pages/PostUsers"
import { PostProvider } from "./context/PostContext";

 const  AppPost = ()=> {  
return (
  <AuthProvider>    
     <PostProvider> 
       <BrowserRouter>                   
          <NavbarPost/>          
          <Routes>            
              <Route path="/" element = {<HomePage />}/>
              <Route path="/login" element = {<LoginPage />}/>
              <Route path="/register" element = {<RegisterPage/> }/>                                   
                  <Route element = {<PrivateRoutes/>}>       
                    <Route path="/users" element = {<PostUsers /> }/>         
                    <Route path="/posts" element = {<PostPage /> }/>        
                    <Route path="/Add-Post" element = {<PostFormPage /> }/>        
                    {/* <Route path="/Post" element = {<PostPage />}/> */}
                    <Route path="/posts/:id" element = { <PostFormPage/> }/>
                    <Route path="/Profile" element = {<ProfilePage/>}/>    
                  </Route>                        
          </Routes>          
      </BrowserRouter>
      </PostProvider>
   </AuthProvider>
    
  );
};

export default  AppPost