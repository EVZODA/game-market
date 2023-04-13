import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import apiInstance from '../../utils/utils';


const ResetPasswordParams = () => {

    const [Password, SetPassword] = useState([]);

    const { token } = useParams();

    const changePassword = async () => {
    
          await apiInstance.put(
            process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CHANGED_PASSWORD_TOKEN_APP + token,
            Password
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

export default ResetPasswordParams