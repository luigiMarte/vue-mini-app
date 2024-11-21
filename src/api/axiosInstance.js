// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Ejemplo de una API de prueba
  timeout: 5000, // Tiempo de espera
});

// Puedes añadir interceptores si necesitas manejar errores globalmente
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la respuesta de la API:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
