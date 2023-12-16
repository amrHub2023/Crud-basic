import {useForm} from 'react-hook-form'
import { usePosts } from '../context/PostContext';
import {useNavigate , useParams} from 'react-router-dom'
import { useEffect } from 'react';


const PostFormPage = () => {
    const {register, handleSubmit, setValue  } = useForm();  
    const {createPost , getPost, updatePost } = usePosts();
    const navigate = useNavigate();
    const params = useParams();
    
useEffect(() => {
 async function loadPost() {
  if (params.id) {
    const post = await getPost(params.id);
    console.log(post)
    setValue('title', post.title)  
    setValue('description', post.description)
 }
  }
  loadPost()
},[])

    const onSubmit = handleSubmit ( (data) => {
      if (params.id) {
        updatePost(params.id, data)
      } else{
        createPost(data)
      }
      
      navigate('/posts')
    
});
// items-center justify-center  className='bg-zinc-800 max-w-md w-full  p-10 rounded-md'

  return (
   
    <div  className="flex h-[calc(100vh-100px)] items-center  justify-center">
        <div className='bg-zinc-600 max-w-md max w-full p-10 rounded-md' >
        <form onSubmit={onSubmit}>
          <label htmlFor="Title">Title</label>
            <input            
             type='text' placeholder='Title' 
             {...register("title")}
             className='w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2'
             autoFocus
             />
            <label htmlFor="Description">Description</label>
            <textarea rows="3" placeholder='Description'
            {...register("description")}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2">
            </textarea>

            
            <label htmlFor="imageURL">Image Post </label>
            
            <input type="text"
            name='imageURL' 
            placeholder='ImageURL'
            {...register("imageURL")}
            autoFocus className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2">
            </input>
            

            <label htmlFor="Date">Date</label>
            <input type="date" name="date" placeholder='Fecha finalizacion'
            {...register("date")}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2">
            </input >
            <button className= " bg-teal-600 my-2 py-1  ps-3 pr-3  px-8  rounded-lg text-xl  text-white " > Save </button>
        </form>
        </div>
    </div>
  )
};

export default PostFormPage