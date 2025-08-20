import axios from "axios";

const api = axios.create({
  baseURL: "/api",   // Vite proxy backend ಗೆ forward ಮಾಡುತ್ತದೆ
  withCredentials: true,  // cookie (sellerToken) send ಆಗೋಕೆ
});

export default api;
