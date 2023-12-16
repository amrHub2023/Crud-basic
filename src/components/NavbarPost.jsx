import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'


export default function NavbarPost() {
    const { logout , user, isAuthenticated} = useAuth();
    console.log('user',user)
    console.log('isAuthenticated',isAuthenticated)  
   
  
    return (
      <nav className='text-2xl bg-zinc-600 my-3 flex justify-between py-5 px-10  pe-8 rounded-md'>   
      <Link  className='bg-teal-600  px-4 py-1 rounded-md text-white'
      to={isAuthenticated ? "posts" : "/"}>  
        <h1 className="text-2xl font-sans" >        
        Post Manager
        </h1>
        </Link>
        <ul className='flex gap-x-4'> 
          {console.log('el valor de is auth En navBarPost',isAuthenticated)}
          {console.log('el valor user en navBarPost',user)}
          {isAuthenticated ? (
            <>
            <div className='flex justify-between py-1 px-10 space-x-6'>
          <li className='text-2xl '>
            {user.avatar}
               User:  {user.username}        
          </li>
            
          <li>
            <Link className='bg-teal-600 ps-2 pr-2  px-4  rounded-md text-xl font-bold text-black' to ="/Add-Post">Post</Link>          
          </li>
          <li>
            <Link className='bg-teal-600 ps-2 pr-2  px-4  rounded-md text-xl font-bold text-black'
            onClick={() => logout()} to ="/" >Logout</Link>          
          </li>
          </div>
            </>
          ):(
            <>
          
          <li className='bg-teal-600 px-4 py-1  rounded-md'>
            <Link to ="/login">Login</Link>          
          </li>
  
          <li className='bg-teal-600 px-4 py-1 rounded-md'>
            <Link to ="/register">Register</Link>          
          </li>
          
           </>
          )}
        
         </ul> 
      </nav>
      
    )};