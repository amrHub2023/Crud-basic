import { createContext,useContext, useState } from "react";
import { createPostRequest, getPostsRequest, deletePostRequest, getPostRequest, updatePostRequest, getUserRequest } from "../api/posts";


//se usa para mantener los datos de las tareas visibbles

const PostContext = createContext();

export const usePosts = () => {
const context = useContext(PostContext);

if (!context)  throw new Error("Error de contexto. ");

return context;

};

export const PostProvider = ( {children} ) => {
const [posts, setPosts] = useState([]);
const [users, setUsers]= useState([]);



// muestra todas las tareas
const getAllUser = async () => {
    try {
        const res = await getUserRequest();
        setUsers(res.data);
        console.log('En getAllUser el valor de res',res);    
        console.log('el valor de users',users)
    } catch (error) {
        console.error(error);
    }
    
};


// muestra todas las tareas
const getPosts = async () => {
    try {
        const res = await getPostsRequest();
        setPosts(res.data);
        console.log('En getPosts el valor de res',res);    
    } catch (error) {
        console.error(error);
    }
    
};

const createPost = async (post) => {
    try{
        const res = await createPostRequest(post)        
    } catch (error) {
        console.log(error)
    }
};

const deletePost = async (id) => {
    try {
      const res = await deletePostRequest(id);
      console.log('el valor de res.status al borrar un elemento',res.status)
      if (res.status === 200) setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

const getPost = async (id) => {
try {
    const res = await getPostRequest(id);
    return res.data;
} catch (error) {
    console.error(error);
}}

const updatePost = async(id, post) => {
try {
    const res = await updatePostRequest(id, post); 
} catch (error) {
    console.error(error);
}};
    return (
        <PostContext.Provider 
        value = {{ 
            posts,
            createPost,
            getPosts,
            deletePost,
            getPost,
            updatePost,
            getAllUser
         }}
        >
        { children }
        </PostContext.Provider>);
};

export default PostContext;
  