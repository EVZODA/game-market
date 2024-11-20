import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:8080";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.response.use(
  (response) => {
    if (response.data.msg) {
      Swal.fire({
        title: response.data.msg,
        icon: "success",
        customClass:{
          title: "justify-center",
          htmlContainer: "h-[200px]"
        },
        timer:1500,
        position: "bottom-right",
        toast: true,
      });
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
    
   
    
    if(err.response.status === 401) {
      setTimeout(() => {
        Swal.fire({
          title: err.response.data.msg,
          icon: "error",
          timer:1500,
        });
        localStorage.clear()
        window.location = "/login"
       
      }, 3000);
        
    }
    return Promise.reject(err.response.data);
  }
);



export default apiInstance;
