import axios from "../config/axios";

const authApi = {};

authApi.register = (body) => axios.post("/auth/register", body);
authApi.login = (body) => axios.post("/auth/login", body);
authApi.getAuthUser = () => axios.get("/auth/get-me");

export default authApi;
