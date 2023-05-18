import { useState } from 'react'
import apiInstance from '../../utils/utils'

const IForgetPassword = () => {

    const [forgetPassword, setForgetPassword] = useState()

    const handleCorreo = (e) => {
        setForgetPassword({
            ...forgetPassword,
            correo: e.target.value
        })
    }


    const handlePalabraClave = (e) => {
        setForgetPassword({
            ...forgetPassword,
            recordartucontrasena: e.target.value
        })
    }

    const SubmitCorreo = async () => {
  
            await apiInstance.put(
              process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_FORGOTPASSWORD_APP,
              forgetPassword
            )
           
    }

  return (
    <div className='flex flex-col items-center py-[70px] space-y-3'>
        <input type='text' className='w-[300px] py-2 border-[1px] border-black rounded-[3px]' onChange={(e)=>{handleCorreo(e)}} placeholder='Correo'/>
        <input type='password' className='w-[300px] py-2 border-[1px] border-black rounded-[3px]'  onChange={(e)=>{handlePalabraClave(e)}} placeholder='Palabra clave'/>
        <button className='p-[10px] mt-[20px] bg-yellow-200 rounded-[6px] pointer-events-auto hover:bg-yellow-300' onClick={SubmitCorreo}>Reestablecer contraseña</button>
    </div>
  )
}

export default IForgetPassword