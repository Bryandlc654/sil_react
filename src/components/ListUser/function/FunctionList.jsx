import { useState, useEffect } from "react";
import API_URL from "../../../api/api";

const FunctionList = () => {
  const [userallData, setUserallData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserallData = async () => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        try {
          const response = await fetch(`${API_URL}auth/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Error al obtener todos los usuarios");
          }

          const userData = await response.json();
          setUserallData(userData.users);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserallData();
  }, []);

  const openModal = (modalId) => {
    const modal = new window.bootstrap.Modal(document.getElementById(modalId));
    modal.show();
  };

  return { userallData, openModal };
};

export default FunctionList;