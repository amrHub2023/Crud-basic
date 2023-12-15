 import { createContext,useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks";


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
    } catch (error) {
        console.log(error)
    }
};

const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log('el valor de res.status al borrar un elemento',res.status)
      if (res.status === 200) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

const getTask = async (id) => {
try {
    const res = await getTaskRequest(id);
    return res.data;
} catch (error) {
    console.error(error);
}}

const updateTask = async(id, task) => {
try {
    const res = await updateTaskRequest(id, task); 
} catch (error) {
    console.error(error);
}};
    return (
        <TaskContext.Provider 
        value = {{ 
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
         }}
        >
        { children }
        </TaskContext.Provider>);
};

export default TaskContext;
  