import React from 'react'
import axios from 'axios'
import { useState, useContext } from 'react'
import { DataImgProvider } from './UseContextProvider';



const PutUser = () => {

  let usuarioid = localStorage.getItem("usuarioid") || "";

  const { putinput, setPutInput, axiosData, setAxiosData} = useContext(DataImgProvider)

 const handleName = (e) => {
  setPutInput({
    ...putinput,
    nombre: e.target.value,
  })

 }


 const handleImg = (e) => {
  setPutInput({
    ...putinput,
    img: e.target.files[0],
  })
  console.log(e.target.files)
 }

 const handlePutUser = async () => {


  console.log(putinput);
  console.log(usuarioid)
  try {
    const axiosresponse = await axios.put(
      process.env.REACT_APP_LOCAL_HOST +
      process.env.REACT_APP_EDITAR_USUARIO_APP +
      "/" + usuarioid,
      
    )
    console.log(axiosresponse)
    setAxiosData(axiosresponse)
  } catch (error) {
    setAxiosData(error.response)
  }
 }

 const SubirArchivo = async () => {
  let usuario = "usuarios"
  
  try {
    const data = new FormData();
    data.append("archivo", putinput.img)
    const axiosresponse = await axios.put(
        process.env.REACT_APP_LOCAL_HOST +
        process.env.REACT_APP_EDITAR_IMAGEN_APP +
        "/" + usuario + "/" + usuarioid,
        data,
      
    )
    const img = axiosresponse.data.modelo.img
    const msg = axiosresponse.data.msg
    window.localStorage.setItem('usuarioimg', img)
    console.log(axiosresponse)
    setAxiosData({img, msg})
  } catch (error) {
    setAxiosData(error.response)
    console.log(error.response)
  }
 }

 const logout = () => {
  localStorage.clear()
  window.location = "index.html"
 }



  return (
    <div className='flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]'>
    <input onChange={(e)=>{handleName(e)}} className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Nombre'/>
    <div className='flex w-[500px] space-x-[20px] justify-center'>
    <input type="file" onChange={(e)=>{handleImg(e)}} className='border-[2px] border-[#8a5422] w-[350px]' name='archivo' placeholder='img' />
    <button onClick={SubirArchivo} className='border-[2px] border-[#8a5422] w-[150px]'>Agregar imagen</button>
    </div>
    <button onClick={handlePutUser} className='border-[2px] border-[#8a5422] w-[500px]'>Editar Usuario</button>
    <button onClick={logout}>Deslogear Cuenta</button>
    <button>Desactivar Cuenta</button>
    <p>{axiosData.msg?axiosData.msg: ""}</p>
    </div>
  )
}

export default PutUser