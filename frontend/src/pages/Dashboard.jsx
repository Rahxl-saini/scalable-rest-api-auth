import { useEffect, useState } from "react";
import API from "../services/api";
import { getToken } from "../utils/auth";
import TaskItem from "../components/TaskItem";
import Navbar from "../components/Navbar";

export default function Dashboard({ setUserToken }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const token = getToken();

  // 🔹 Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTasks(res.data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  // 🔹 Add Task
  const addTask = async () => {
    if (!text) return;

    try {
      await API.post(
        "/tasks",
        { title: text },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setText("");
      fetchTasks();
    } catch (err) {
      console.log("Add error:", err);
      alert("Add failed");
    }
  };

  // 🔹 Delete Task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchTasks();
    } catch (err) {
      console.log("Delete error:", err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Navbar setToken={setUserToken} />

      <h2>Dashboard</h2>

      {/* Add Task */}
      <input
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
    </div>
  );
}