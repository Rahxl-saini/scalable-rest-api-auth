import { useEffect, useState } from "react";
import API from "../services/api";
import { getToken } from "../utils/auth";
import TaskItem from "../components/TaskItem";
import Navbar from "../components/Navbar";

export default function Dashboard({ setUserToken }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: { Authorization: getToken() }
      });
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async () => {
    try {
      await API.post(
        "/tasks",
        { title: text },
        { headers: { Authorization: getToken() } }
      );
      setText("");
      fetchTasks();
    } catch {
      alert("Add failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: { Authorization: getToken() }
      });
      fetchTasks();
    } catch {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar setToken={setUserToken} />

      <h2>Dashboard</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onDelete={deleteTask} />
      ))}
    </div>
  );
}