import React from 'react'
import './login.css'
import Logo from '../../assets/logo.png';

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="left">
                    <div className="header">
                        <img src={Logo} className="animation a1 logo" alt="Logo" />
                        <h2 className="animation a1">Iniciar Sesión</h2>
                    </div>
                    <div>
                        <form action="" method="post" className="form">
                            <input
                                type="text"
                                className="form-field animation a3"
                                placeholder="Usuario"
                                pattern="[0-9]{8}"
                                title="Ingrese un DNI válido de 8 dígitos"
                                required
                                name="dni"
                            />
                            <input
                                type="password"
                                className="form-field animation a4"
                                placeholder="Contraseña"
                                required
                                name="contrasena"
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
    )
}

export default Login