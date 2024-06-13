import axios from "axios";

export const api = axios.create({
    baseURL: "https://cativa-backend.onrender.com/",
});
