import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext"


function PostCard( { post }) {   
  const { deletePost  } = usePosts();


  return (
    <div className="mb-4 mx-auto max-w-md">
        <header className="flex justify-between items-center"> 
          <img 
          src={post.imageURL}
          alt="Post Image" 
          className="w-full h-40 rounded-md object-cover"
          />
        </header>
<Link to= {`/posts/${post._id}`} > 
<h1 className="text-xl font-serif my-2"> {post.title} </h1>
</Link>
<p className="text-slate-300 max-h-16 overflow-hidden">{post.description} </p>

<p className="text-slate-300">{post.createdAt} </p>
 
 <div className="flex gap-x-2 items-center mt-2"> 

    <button className= " bg-red-500 gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white" onClick={() => deletePost(post._id)}>Delete</button>
    <Link to={`/posts/${post._id}`}>
    <button  className= " bg-teal-800  gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white" > Edit </button>
    </Link>

 </div>


    </div>
   
  ); 
}

export default PostCard

   
