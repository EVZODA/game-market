import axios from "axios";

const BASE_URL = "http://localhost:8080";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.response.use(
  (response) => {
    if (response.data.msg) {
      alert(response.data.msg)
    }
    return response
  },
  (err) => { 
    if(!err.response) {
      return Promise.reject({
        status: 999,
        timestamp: new Date(),
        message: "Se ha producido un error inesperado",
        error: err
      });
    }
    alert(err.response.data.msg)
    console.log(err)
    if(err.response.status === 401) {
        localStorage.clear()
        window.location = "/login"
    } else {
        
    }
    return Promise.reject(err.response.data);
    
  }
);



export default apiInstance;
