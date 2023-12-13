import { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';

function TasksPage() {
  const { tasks, getTasks} = useTasks();

  useEffect( () => { getTasks();},[]);
  
console.log('Ingresa a TaskPage desde /tasks')
console.log('la longitud de tasks.length es: ',tasks.length)
console.log('el valor de tasks es ',tasks)
console.log('el valor de de tasks.id es: ',tasks.id)
console.log('el valor de de tasks._id es: ',tasks._id)
console.log('el valor de tasks[0] es: ',tasks[0])
// console.log('el valor de tasks[0]._id es: ',tasks[0].id)
console.log('el valor de tasks._username es: ',tasks._username)
console.log('el valor de tasks.username es: ',tasks.username)

 if (tasks.length === 0) return (<h1> No Tasks</h1>);

  return (       
 <>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tasks.map((task) => (
        
        <div key={task._id}>
          <h1>{task._title}</h1>
          <p> {task._description} </p>
        </div>
      ))}
    </div>  
  </>
       );
}

export default TasksPage;