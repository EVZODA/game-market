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
    <div className=''>
        <input type='text' onChange={(e)=>{handleCorreo(e)}} placeholder='Correo'/>
        <input type='password' onChange={(e)=>{handlePalabraClave(e)}} placeholder='Palabra clave'/>
        <button onClick={SubmitCorreo}>Enviar correo para reeestablecer contraseña</button>
    </div>
  )
}

export default IForgetPassword