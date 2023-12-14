 import { createContext,useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest } from "../api/tasks";


//se usa para mantener los datos de las tareas visibbles

const TaskContext = createContext();

export const useTasks = () => {
const context = useContext(TaskContext);

if (!context)  throw new Error("Error de contexto. ");

return context;

};

export const TaskProvider = ( {children} ) => {
const [tasks, setTasks] = useState([]);

// muestra todas las tareas
const getTasks = async () => {
    try {
        const res = await getTasksRequest();
        setTasks(res.data);
        console.log('En getTasks el valor de res',res);    
    } catch (error) {
        console.error(error);
    }
    
};

const createTask = async (task) => {
    try{
        const res = await createTaskRequest(task)
        console.log('desde TaskContext en createTasks el valor de res es: ',res);
    } catch (error) {
        console.log(error)
    }
};

const deleteTask = async(id) => {
const res = await deleteTaskRequest(id)
console.log(res.data)
};
    return (
        <TaskContext.Provider 
        value = {{ tasks, createTask, getTasks, deleteTask  }}
        >
        { children }
        </TaskContext.Provider>);
};

export default TaskContext;
 