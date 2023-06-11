import axios from "axios";

export const axiosInst = axios.create({
   baseURL : "https://vdotube-production.up.railway.app/api/"
})
