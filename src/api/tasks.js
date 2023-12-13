import axios from "./setCredentials";

export const getTasksRequest = async() => axios.get("/tasks");

export const getTaskRequest = async(id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = async(task) => axios.post("/tasks",task);

export const updateTaskRequest = async (task) => axios.put(`/tasks/${task_id}`,task);

export const deleteTaskRequest = async(id) => axios.delete(`/tasks/${id}`);
