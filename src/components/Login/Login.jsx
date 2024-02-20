import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import Logo from '../../assets/logo.png';
import API_URL from '../../api/api';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token',data.access_token);
        console.log(data.access_token) 
        onLoginSuccess();
        navigate('/home'); 
      } else {
        console.error('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al autenticar', error);
    }
  };


  return (
    <>
      <div className="container w-100">
        <div className="left">
          <div className="header">
            <img src={Logo} className="animation a1 logo" alt="Logo" />
            <h2 className="animation a1">Iniciar Sesión</h2>
          </div>
          <div>
            <form onSubmit={handleLogin} className="form">
              <input
                type="text"
                className="form-field animation a3"
                placeholder="Correo"
                title="Ingrese un correo válido"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Contraseña"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <p className="animation a5 reset__password">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </p>
              <button className="animation a6" type="submit" id="liveToastBtn">
                Ingresar
              </button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Login;
