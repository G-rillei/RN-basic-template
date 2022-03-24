import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:1412/"
})

export default api