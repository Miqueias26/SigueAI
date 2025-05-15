// App.jsx
import AppRoutes from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = ({ location }) => {
      if (location.pathname !== "/" && !location.pathname.startsWith("/api")) {
      }
    };

    return unlisten;
  }, [navigate]);

  return <AppRoutes />;
}

export default App;
