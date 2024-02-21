import { useState } from "react";
import API_URL from "../../../api/api";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return { formData, setFormData, handleInputChange };
};

export const useLogin = (formData, onLoginSuccess, navigate) => {
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        onLoginSuccess();
        navigate("/home");
      } else {
        const errorData = await response.json(); // Obtener datos de error del servidor
        
        if (response.status === 401) {
          setError("Credenciales incorrectas");
        } else {
          setError("Error al autenticar: " + errorData.message);
        }
      }
    } catch (error) {
      console.error("Error al autenticar", error);
      setError("Error al autenticar"); // Establecer el error en el estado
    }
  };
  return { handleLogin, error };
};