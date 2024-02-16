import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebard/Sidebard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    // Función para manejar el éxito de la autenticación y cambiar el estado
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {isAuthenticated ? <Sidebar /> : <Login onLoginSuccess={handleLoginSuccess} />}
        <div className='vw100'>
          <Routes>
            {/* Protege la ruta de inicio para que solo se muestre si el usuario está autenticado */}
            {isAuthenticated && <Route path="/home" element={<Home />} />}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
