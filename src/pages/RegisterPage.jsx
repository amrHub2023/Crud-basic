import { useForm } from "react-hook-form"
import {useAuth} from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';



const RegisterPage = ()=> {
    const{ register, handleSubmit, formState:{errors} } = useForm();
    const {signup, isAuthenticated, errors:registerError} = useAuth();
    
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async(values) => {
        signup(values)
    });
    
    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

 
    return ( 
    <>    
   
    <div className="flex h-screen items-center justify-center"> 
    {
    registerError.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
        </div>
        ))    
    }
    
        <div className= "bg-zinc-600 max-w-md p-10 rounded-md"> 
        <form onSubmit ={onSubmit}>                    
        <h1 className="text-4xl text-center font-semibold mb-5">Register </h1>
        <input type="text" { ...register ("username", {required:true})}
            className="w-full bg-zinc-800 text-white px-4 py-2 my-5 rounded-md"  placeholder="Username"
            {...register("username",{required:true})}
            />
        {errors.username && (
            <p className="text-red-400"> Username is required </p>
        )}
        
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

        <input type="text" {...register ("avatarUrl" ,{required:true})}
            className="w-full bg-zinc-800 text-white px-4 py-2 my-5 rounded-md" placeholder="Avatar"
            {...register("avatarUrl", {required:true})}
            />
        {errors.avatarUrl && (
            <p className="text-red-400"> Avatar url is required </p>
        )}
       

        <div className="flex justify-center">
        <button type="submit " className="w-1/3 h-10 px-6 rounded-md text-center bg-zinc-800 text-white my-3"> Register
        </button>
        </div>                   
        </form> 

        <p className="grid grid-cols-3">
            ¿Tienes una cuenta?
            <Link to="/login" 
            className= "text-center px-3 py-1 my-1 font-semibold rounded-md bg-zinc-800 text-white">Loguearse </Link>
        </p>
       </div>    
    </div>
    </>
    );
};
export default RegisterPage




