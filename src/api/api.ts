import axios from "axios";
import type { TTask } from "store/store.types";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
  headers: { "X-Custom-Header": "myApp" },
});

// json-server --watch src/db/db.json --port 3001

const fetchCreateTask = (task: TTask) => api.post(`/tasks`, task);

const fetchTasks = (owner_id: string) => api.get(`/tasks?owner_id=${owner_id}`);

const fetchUpdateTask = (task: TTask) => api.put(`/tasks/${task?.id}`, task);

const getLogin = (arg: { email: string; password: string }) =>
  api.get(`/employees?email=${arg.email}&password=${arg.password}`);

/**Функционал регистрации не закончен */
const getSignup = (arg: {
  email: string;
  password: string;
  name: string;
  surname: string;
}) =>
  api.post("/register", {
    email: arg.email,
    password: arg.password,
    name: arg.name,
    surname: arg.surname,
  });

export { fetchCreateTask, fetchTasks, fetchUpdateTask, getLogin, getSignup };
