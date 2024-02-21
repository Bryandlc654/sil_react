import { useState, useEffect } from "react";
import API_URL from "../../../api/api";

const FunctionRegister = () => {
  const [formData, setFormData] = useState({
    Usuario_dni: "",
    Usuario_apellidos: "",
    Usuario_fnacimiento: "",
    Usuario_sexo: "",
    Usuario_direccion: "",
    Usuario_distrito: "",
    Usuario_provincia: "",
    Usuario_departamento: "",
    Usuario_celular: "",
    Usuario_status: "",
    Usuario_foto: "",
    Rol_id: "",
    name: "",
    email: "",
    password: "",
  });
  const [roles, setRoles] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_URL}auth/roles`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setRoles(data);
        } else {
          console.error("Error al obtener los roles");
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };

    fetchRoles();
  }, [formData]); 

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      Rol_id: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccessMessage("Usuario registrado exitosamente");
        setErrorMessage(""); // Limpiar el mensaje de error si hubo uno previamente
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Error al registrar usuario");
        setSuccessMessage(""); // Limpiar el mensaje de éxito si hubo uno previamente
      }
    } catch (error) {
      console.error("Error de red:", error);
      setErrorMessage("Error de red");
      setSuccessMessage(""); // Limpiar el mensaje de éxito si hubo uno previamente
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "Usuario_status" || id === "Usuario_sexo") {
      setFormData({
        ...formData,
        [id]: value.charAt(0),
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setFormData({
          ...formData,
          Usuario_foto: imageData,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    formData,
    roles,
    successMessage,
    errorMessage,
    handleSelectChange,
    handleSubmit,
    handleInputChange,
    handleImageChange
  };
};

export default FunctionRegister;