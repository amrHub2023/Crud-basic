import { useEffect } from 'react';
import { usePosts } from '../context/PostContext';
import PostCard from '../components/PostCard';

function PostPage() {
  const { posts, getPosts } = usePosts();

  useEffect( () => { getPosts()},[]);
  

 if (posts.length === 0) return (<h1> No Posts</h1>);

  return (       
 <>
    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
      <div className='flex space-y-5 flex-col  px-5 py-5 gap-3'>
      {posts.map((post) => (
        <PostCard post={post} key={post._id}/>
        
      ))}
    </div>  
  </>
       );
}

export default PostPage;