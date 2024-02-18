import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebard/Sidebard.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica si el token existe en el almacenamiento local al cargar la aplicación
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {isAuthenticated ? (
          <Sidebar />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
        <div className="vw100">
          <Routes>
            {/* Protege la ruta de inicio para que solo se muestre si el usuario está autenticado */}
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : <Navigate to="/home" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
