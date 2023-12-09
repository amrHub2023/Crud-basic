import axios from "./setCredentials";

export const getTasksRequest = () => axios.get("/tasks");
export const getTaskRequest = (id) => axios.get(`/tasks/${id}"`);
export const createTaskRequest = (task) => axios.post("/tasks",task);
export const updateTaskRequest = (task) => axios.put(`/tasks/${task_id}`,task);
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);