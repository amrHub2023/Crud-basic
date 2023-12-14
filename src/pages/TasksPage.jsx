import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

function TasksPage() {
  const { tasks, getTasks} = useTasks();

  useEffect( () => { getTasks()},[]);
  

 if (tasks.length === 0) return (<h1> No Tasks</h1>);

  return (       
 <>
    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2"> */}
      <div className='flex space-y-5 flex-col  px-5 py-5 gap-3'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
        
      ))}
    </div>  
  </>
       );
}

export default TasksPage;