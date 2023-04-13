import React from 'react'
import { Link } from 'react-router-dom'
import { useState,  useEffect} from 'react'
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
        <div className='flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]'>
        <input type='text' onChange={handleName} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Nombre'/>
        <input type='text' onChange={handleEmail} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Correo' />
        <input type='password' onChange={handleRecordingPassword} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Palabra clave' />
        <input type='password' onChange={handlePassword} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Contraseña' />
        <button onClick={handleRegister} className='border-[2px] border-[#8a5422] w-[500px]'>enviar</button>
  
        <div className='mx-[20px]'><Link to='/login'>Si ya tiene una cuente inicia sesion aqui</Link></div>
        </div>
      )
    }


export default Register