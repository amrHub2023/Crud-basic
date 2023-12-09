import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect( () => {
    getTasks();
  },[]);
console.log('Ingresa a TaskPage desde /Tasks')
  if (tasks.length === 0) return (<h1> No Tasks</h1>);

  return (       
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p> {task.description} </p>
        </div>
      ))}
    </div>  
       );
}

export default TasksPage;