import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return (
      <div>
        <Login setUserToken={setToken} />
        <Register />
      </div>
    );
  }

  return <Dashboard setUserToken={setToken} />;
}

export default App;