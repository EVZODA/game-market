import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState,  useEffect} from 'react'




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
    try {
      const axiosresponse = await axios.post(
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_REGISTER_APP,
        postInput)
        axiosResponseConfirm()
        setAxiosData(axiosresponse)
    } catch (error) {
      console.log(error)
      setAxiosData(error.response)
    }
    
  }

  const axiosResponseConfirm = async () => {
    try {
      const axiosResponseConfirm = await axios.get (
        process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_REGISTER_APP + "/" + confirm + "/" + token,
        confirmRegister
      )
      
    } catch (error) {
      
    }
    
  }
  
    return (
        <div className='flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]'>
        <input onChange={handleName} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Nombre'/>
        <input onChange={handleEmail} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Correo' />
        <input onChange={handleRecordingPassword} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Palabra clave' />
        <input onChange={handlePassword} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Contraseña' />
        <button onClick={handleRegister} className='border-[2px] border-[#8a5422] w-[500px]'>enviar</button>
        <p>{axiosData?axiosData.data.msg: ""}</p>
        <div className='mx-[20px]'><Link to='/login'>Si ya tiene una cuente inicia sesion aqui</Link></div>
        </div>
      )
    }


export default Register