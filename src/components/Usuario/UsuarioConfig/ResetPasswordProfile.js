import React from 'react'
import { useState, useEffect } from 'react'
import apiInstance from '../../utils/utils';



const ResetPassword = () => {

  const [axiosdata, setAxiosData] = useState();

  const [Password, SetPassword] = useState([]);

 
  

  const changePassword = async () => {
  let token = localStorage.getItem("token") || ""
  let usuarioid = localStorage.getItem("usuarioid")
  
     await apiInstance.put(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CHANGED_PASSWORD_APP + usuarioid,
        Password, {
          headers: {
            "x-token": token,
          },
        }
      )
      window.location = "/login"
  }

    const handlePassword =  (e) => {
      SetPassword({
        ...Password,
        password: e.target.value
      })
    }

    const handlerepeatPassword = (e) => {
      SetPassword({
        ...Password,
        repeatPassword: e.target.value
      })
    }


  return (
    <div className='flex flex-col space-y-[5px] justify-center items-center'>
        <input type='password' onChange={(e)=>{handlePassword(e)}} className='border-[2px] border-[#8a5422] w-[250px]' placeholder='Contraseña'/>
        <input type='password' onChange={(e)=>{handlerepeatPassword(e)}} className='border-[2px] border-[#8a5422] w-[250px]' placeholder='Repetir contraseña'/>
        <button onClick={changePassword} className='border-[2px] border-[#8a5422] w-[250px]'>Confirmar</button>
    </div>
  )
}

export default ResetPassword