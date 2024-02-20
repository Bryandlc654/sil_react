import { useEffect, useState } from "react";
import API_URL from "../../api/api";
import { format } from "date-fns";
const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userallData, setUserallData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        try {
          const response = await fetch(`${API_URL}auth/me`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }

          const userData = await response.json();
          setUserData(userData);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchUserData();
  }, []);

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
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString('es-ES', options);
  };
  return (
    <>
     
    </>
  );
};

export default Home;
