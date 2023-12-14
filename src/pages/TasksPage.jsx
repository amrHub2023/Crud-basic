import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';

function TasksPage() {
  const { tasks, getTasks} = useTasks();

  useEffect( () => { getTasks()},[]);
  

 if (tasks.length === 0) return (<h1> No Tasks</h1>);

  return (       
 <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks.map((task) => (
        
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p> {task.description} </p>
        </div>
      ))}
    </div>  
  </>
       );
}

export default TasksPage;