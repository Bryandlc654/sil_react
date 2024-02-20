import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx"
import Sidebar from "./components/Sidebard/Sidebard.jsx";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RegisterUser from "./components/RegisterUser/Register-user.jsx";


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
      <div className="container-fluid">
        <div className="row">
          {isAuthenticated ? (
            <>
              <Header />
              <Sidebar />
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
          <div>
            <Routes>
              <Route
                path="/home"
                element={isAuthenticated ? <Home /> : <Navigate to="/home" />}
              />
              <Route
                path="/register-user"
                element={isAuthenticated ? <RegisterUser /> : <Navigate to="/register-user" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
