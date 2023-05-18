import React from 'react'
import { useState, useEffect, createContext } from 'react'
import apiInstance from '../utils/utils'

export const DataProfileProvider = createContext()


const DataProfile = (props) => {
    const [putinput, setPutInput] = useState("")
    const [axiosData, setAxiosData] = useState("")
    const [usuarioImg, setUsuarioImg] = useState("")
    const [Open, setOpen] = useState(false)

   const usuarioid = localStorage.getItem("usuarioid")
   const token = localStorage.getItem("token")

    useEffect(() => {
        if (usuarioid) {
            getUser()
        }
    }, )
    
    const getUser = async () => {
        const response = await apiInstance.get(
            process.env.REACT_APP_LOCAL_HOST + process.env.REACT_APP_EDITAR_USUARIO_APP + "/" + usuarioid, {
                headers: {
                    "x-token" : token
                }
            }
          )
          setUsuarioImg(response.data.usuario.img)
    }




return (
    <DataProfileProvider.Provider value={{putinput, setPutInput, axiosData, setAxiosData, usuarioImg, Open, setOpen}}>
        {props.children}
    </DataProfileProvider.Provider>
  )}


export default DataProfile



