import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext"


function UserCard( { users }) {   
  const { deletePost  } = usePosts();


  return (
    <div className="mb-4 mx-auto max-w-md">
        
<Link to= {`/users/${users._id}`} > 
<h1 className="text-xl font-serif my-2"> {users.avatarUrl} </h1>
</Link>



    </div>
   
  ); 
}

export default UserCard