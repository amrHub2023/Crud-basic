 import { createContext,useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";




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
        console.log(res);    
    } catch (error) {
        console.error(error);
    }
    
};

const createTask = async (task) => {
    const res = await createTaskRequest(task)
    console.log(task);
}

    return (
        <TaskContext.Provider 
        value = {{ tasks, createTask, getTasks  }}
        >
        { children }
        </TaskContext.Provider>);
};

export default TaskContext;
