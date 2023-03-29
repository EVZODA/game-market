import React, { useEffect, useState, useContext } from 'react'
import person from '../img/person.svg'
import { Link } from 'react-router-dom'
import { DataImgProvider } from './UseContextProvider'

const ProfileUser = () => {

  const { putinput, setPutInput, axiosData, setAxiosData, usuarioImg} = useContext(DataImgProvider)

  const token = localStorage.getItem("token")



  
    
    
   
    

  return (
    <div className='h-[60px]'>
         <Link to="/profileuser">
            <img alt='' className={`${!token ? "h-[0px]": " h-[60px] mt-[5px]"}`} src={usuarioImg? usuarioImg: person}/>
         </Link>
    </div>
  )
}

export default ProfileUser