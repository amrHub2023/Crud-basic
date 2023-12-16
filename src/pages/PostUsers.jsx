import React from 'react'
import { useEffect } from 'react';
import { usePosts } from '../context/PostContext';
import UserCard from '../components/UserCard';


function PostUsers() {
  const { users,  getAllUser} = usePosts();

  useEffect( () => { getAllUser()},[]);
  

 if (users.length === 0) return (<h1> No Posts</h1>);

  return (       
 <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {/* <div className='flex space-y-5 flex-col  px-5 py-5 gap-3'> */}
      {users.map((user) => (
        <UserCard user={user} key={user._id}/>
        
      ))}
    </div>  
  </>
       );
}

export default PostUsers