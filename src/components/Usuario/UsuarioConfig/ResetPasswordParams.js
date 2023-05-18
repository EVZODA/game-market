import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import apiInstance from '../../utils/utils';


const ResetPasswordParams = () => {

    const [Password, SetPassword] = useState([]);

    const { token } = useParams();


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

      const changePassword = async () => {
    
        await apiInstance.put(
          process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_CHANGED_PASSWORD_TOKEN_APP + token,
          Password
         )
         window.location = "/login"
  }



  return (
    <div className='flex flex-col space-y-[5px] justify-center items-center'>
        <input type='password' onChange={(e)=>{handlePassword(e)}} className='py-2 w-[500px] border-[1px] border-black rounded-[3px]' placeholder='Contraseña'/>
        <input type='password' onChange={(e)=>{handlerepeatPassword(e)}} className='py-2 w-[500px] border-[1px] border-black rounded-[3px]' placeholder='Repetir contraseña'/>
        <button onClick={changePassword} className='btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300'>Confirmar</button>
    </div>
  )
}

export default ResetPasswordParams