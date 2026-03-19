import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

// Add token automatically in every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

// ---------------- AUTH APIs ----------------

export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

export const loginUser = (data) => {
  return API.post("/auth/login", data);
};

// ---------------- TASK APIs ----------------

export const getTasks = () => {
  return API.get("/tasks");
};

export const createTask = (data) => {
  return API.post("/tasks", data);
};

export const deleteTask = (id) => {
  return API.delete(`/tasks/${id}`);
};

// ---------------- EXPORT DEFAULT ----------------

export default API;