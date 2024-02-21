import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from "../../assets/logo.png";
import { Eye, EyeClose } from "../svg/Eye";
import { useForm, useLogin } from "./function";

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const { formData, handleInputChange } = useForm({
    email: "",
    password: "",
  });
  const { handleLogin, error } = useLogin(formData, onLoginSuccess, navigate);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
              <div className="content-password animation a4">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-field animation a4"
                  placeholder="Contraseña"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
                <span className="eyes_close" onClick={togglePasswordVisibility}>
                  {showPassword ? <EyeClose /> : <Eye />}
                </span>
              </div>
              {error && <span className="error-message">{error}</span>} {/* Renderizar el mensaje de error si existe */}
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
