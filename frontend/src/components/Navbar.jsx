import { logout } from "../utils/auth";

export default function Navbar({ setToken }) {
  const handleLogout = () => {
    logout();
    setToken("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h2>My App</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}