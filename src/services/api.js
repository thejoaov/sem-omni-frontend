import axios from "axios";

const url = process.env.DATABASE_URL || "http://localhost:3333";

const api = axios.create({
  baseURL: url,
});

export default api;
export { url };
