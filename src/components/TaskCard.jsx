import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext"

function TaskCard( { task }) {   
  const { deleteTask  } = useTasks();
  return (
    <div className="  bg-zinc-700 max-w-md w-full p-10 rounded-md">
      <div >
        <header className="flex justify-between">
          <h1 className="text-xl font-serif" >{task.title}</h1>
          <div className="flex gap-x-2 items-center" >

            <button className= " bg-red-500 gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white" onClick={() => {deleteTask(task._id);
            }}> 
            Delete</button>

             
              <Link className= " bg-teal-600  gap-1 ps-2 pr-2  px-4  rounded-md text-xl  text-white" to={`/tasks/${task._id}`}>  Edit </Link>                         
          </div>
          </header>

          <p className="text-slate-300"> {task.description} </p>
          <p>{new Date(task.date).toLocaleDateString()} </p>
        </div>

    </div>
  ) 
}

export default TaskCard

   


{/* <header className="flex justify-between"> 
<h1 className="text-xl font-serif">{task.title} </h1>
<div className="flex gap-x-2 items-center">
<button onClick={()=> { console.log(task._id) }}> delete </button>
<button> Edit</button>
</div>
</header> */}