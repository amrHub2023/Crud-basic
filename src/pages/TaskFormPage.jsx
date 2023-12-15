import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TaskContext';
import {useNavigate , useParams} from 'react-router-dom'
import { useEffect } from 'react';


const TaskFormPage = () => {
    const {register, handleSubmit, setValue  } = useForm();  
    const {createTask , getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();
    
useEffect(() => {
 async function loadTask() {
  if (params.id) {
    const task = await getTask(params.id);
    console.log(task)
    setValue('title', task.title)  
    setValue('description', task.description)
 }
  }
  loadTask()
},[])

    const onSubmit = handleSubmit ( (data) => {
      if (params.id) {
        updateTask(params.id, data)
      } else{
        createTask(data)
      }
      
      navigate('/tasks')
    
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

export default TaskFormPage