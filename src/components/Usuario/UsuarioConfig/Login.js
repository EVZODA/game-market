import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import IForgetPassword from './IForgetPassword';
import apiInstance from '../../utils/utils';




const Login = () => {

    const [LoginInput, setLoginInput] = useState({})


    const handleCorreo = (e) => {
      setLoginInput({
        ...LoginInput, correo: e.target.value
      })
    }
  
    const handlePassword = (e) => {
      setLoginInput({
        ...LoginInput, password: e.target.value
      })
    }


    const login = async () => {
     const axiosResponse = await apiInstance.post (
      process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_LOGIN_APP,
      LoginInput
     )
     const {token, usuario} = axiosResponse.data
     window.localStorage.setItem('token', token);
     window.localStorage.setItem('usuario', usuario.rol)
     window.localStorage.setItem('usuarioid', usuario.uid)
     window.location = "/"

     console.log(axiosResponse)
    }
    



    
    

    
    
    
   
    

    


  return (

<>
    
    <div className="flex flex-col">
                <input type="text" name="correo" className="mb-2" placeholder="Correo" onChange={(e)=>{handleCorreo(e)}}/>
                <input type="password" name="password" className="mb-2" placeholder="Password" onChange={(e)=>{handlePassword(e)}}/>
    
                <button onClick={login} type="submit" className="btn btn-primary">
                    Ingresar
                </button>
            </div>
            <div className='flex flex-col'>
            <Link to="/iforgetpassword">
            <button>He olvidado mi contraseña</button>
        </Link>
            </div>
            </>
            
  )
}

export default Login