
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { HomePage } from "./pages/homePage"; 
import {PostPage} from "./pages/PostPage";
import { ProfilePage } from "./pages/ProfilePage";
import  PrivateRoutes  from "./routes/PrivateRoutes";
import NavbarPublic from "./components/NavbarPublic";
import  TaskFormPage  from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import { TaskProvider } from "./context/TaskContext";

 const  App = ()=> {  
return (
  <AuthProvider>    
     <TaskProvider> 
       <BrowserRouter>                   
          <NavbarPublic/>          
          <Routes>            
              <Route path="/" element = {<HomePage />}/>
              <Route path="/login" element = {<LoginPage />}/>
              <Route path="/register" element = {<RegisterPage/> }/>                                   
                  <Route element = {<PrivateRoutes/>}>             
                    <Route path="/tasks" element = {<TasksPage /> }/>        
                    <Route path="/Add-Task" element = {<TaskFormPage /> }/>        
                    <Route path="/Post" element = {<PostPage />}/>
                    <Route path="/tasks/:id" element = { <TaskFormPage/> }/>
                    <Route path="/Profile" element = {<ProfilePage/>}/>    
                  </Route>                        
          </Routes>          
      </BrowserRouter>
      </TaskProvider>
   </AuthProvider>
    
  );
};

export default  App