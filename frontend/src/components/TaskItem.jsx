export default function TaskItem({ task, onDelete }) {
  return (
    <div style={{ margin: "10px 0" }}>
      {task.title}
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}