import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fvk0ka2e4d.execute-api.us-east-1.amazonaws.com/dev",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
