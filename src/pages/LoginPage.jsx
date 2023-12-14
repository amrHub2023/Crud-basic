import { useForm } from "react-hook-form"
import {useAuth} from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';



const LoginPage = ()=> {
    const{ register, handleSubmit, formState:{errors} } = useForm();
           
    const {signin, isAuthenticated, errors:signinError } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async(data) => { signin(data)});

    useEffect(() => {
       
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]) 

     return (
        <>
            
            <div className="flex h-screen items-center justify-center"> 
                <div className= "bg-zinc-600 max-w-md w-full p-10 rounded-md"> 
                    {signinError.map((error, i)=> (

                        <div claseName= "bg-red-5500 p-2 text-white my-2" key={i}>
                    {error}
                    </div>       
                    ))}
                    <form onSubmit ={onSubmit}>                            
                    <h1 className="text-4xl text-center font-semibold mb-5">Login </h1>
                    <input type="email" {...register("email",{required:true}) }
                        className="w-full bg-zinc-800 text-white px-4 py-2 my-5 rounded-md" placeholder="Email"
                        {...register("email", {required:true})}
                        />
                    {errors.email && (
                        <p className="text-red-400"> Email is required </p>
                    )}
                    
                    <input type="password" {...register ("password" ,{required:true})}
                        className="w-full bg-zinc-800 text-white px-4 py-2 my-5 rounded-md" placeholder="Password"
                        {...register("password", {required:true})}
                        />
                    {errors.password && (
                        <p className="text-red-400"> Password is required </p>
                    )}
                    <div className="flex justify-center">
                    <button type="submit " className="w-1/3 h-10 px-6 rounded-md text-center bg-zinc-800 text-white my-3"> Login
                    </button>
                    </div>                   
                    </form> 
                    {/* //flex justify-item-center mt-10 my-5 */}
                    <p className="grid grid-cols-3">
                        ¿No tienes una cuenta?
                        <Link to="/register" 
                        className= "text-center px-3 py-1 my-1 font-semibold rounded-md bg-zinc-800 text-white">Registrarse </Link>
                    </p>
                </div>    
            </div>  
        </>          
    );
};
export default LoginPage


// useEffect ( () => {
    //     console.log('Al entrar en login page el valor de isAuthenticated es: ',isAuthenticated)
    //     if (isAuthenticated) navigate ("/TasksPage");
    // },[isAuthenticated] );