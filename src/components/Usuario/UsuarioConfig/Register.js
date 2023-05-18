import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import apiInstance from '../../utils/utils'




const Register = () => {

  const token = localStorage.getItem("token")
  const confirm = "confirm"


  const [postInput, setPostInput] = useState({});
  const [axiosData, setAxiosData] = useState()
  const [confirmRegister, setConfirmRegister] = useState()



  const handleName = (e) => {
   setPostInput({
    ...postInput,
    nombre: e.target.value
   })
  }

  const handleEmail = (e) => {
    setPostInput({
      ...postInput,
      correo: e.target.value
     })
  }

  const handleRecordingPassword = (e) => {
    setPostInput({
      ...postInput,
      recordartucontrasena: e.target.value
     })
  }

  const handlePassword = (e) => {
    setPostInput({
      ...postInput,
      password: e.target.value
     })
  }

  const handleRegister = async () => {

      await apiInstance.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_REGISTER_APP,
        postInput)
  }

  const axiosResponseConfirm = async () => {
    
      await apiInstance.get (
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_REGISTER_APP + "/" + confirm + "/" + token,
        confirmRegister
      )
    
  }
  
    return (
        <div className='flex flex-col mx-2 space-y-[10px] px-[8px] items-center py-[100px] bg-slate-50 min-h-[100vh]'>
        <input type='text' onChange={handleName} className='py-2 w-[500px] max-w-full border-[1px] border-black rounded-[3px]' placeholder='Nombre'/>
        <input type='text' onChange={handleEmail} className='py-2 w-[500px] max-w-full border-[1px] border-black rounded-[3px]' placeholder='Correo' />
        <input type='password' onChange={handleRecordingPassword} className='py-2  w-[500px] max-w-full border-[1px] border-black rounded-[3px]' placeholder='Palabra clave' />
        <input type='password' onChange={handlePassword} className='py-2  w-[500px] max-w-full border-[1px] border-black rounded-[3px]' placeholder='Contraseña' />
        <button onClick={handleRegister} className='btn btn-primary mt-[15px] px-[40px] h-[40px] bg-yellow-200 rounded-[8px] pointer-events-auto hover:bg-yellow-300'>enviar</button>
  
        <button className='rounded-[8px] pointer-events-auto hover:underline'><Link to='/login'>Si ya tiene una cuenta inicia sesion aqui</Link></button>
        </div>
      )
    }


export default Register