import React from 'react'
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataImgProvider = createContext()


const DataImg = (props) => {
    const [putinput, setPutInput] = useState("")
    const [axiosData, setAxiosData] = useState("")
    const [usuarioImg, setUsuarioImg] = useState("")

   const usuarioid = localStorage.getItem("usuarioid")

    useEffect(() => {
    getUser()
    }, [])
    
    const getUser = async () => {
        const response = await axios.get(
            process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_EDITAR_USUARIO_APP + "/" + usuarioid
          )
          setUsuarioImg(response.data.usuario.img)
    }




return (
    <DataImgProvider.Provider value={{putinput, setPutInput, axiosData, setAxiosData, usuarioImg}}>
        {props.children}
    </DataImgProvider.Provider>
  )}


export default DataImg



