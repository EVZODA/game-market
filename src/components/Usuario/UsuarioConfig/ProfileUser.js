import React, { useEffect, useState, useContext } from 'react'
import person from '../../../img/person.svg'
import { Link } from 'react-router-dom'
import {DataProfileProvider } from '../../Context/UseContextProvider'

const ProfileUser = () => {

  const { putinput, setPutInput, axiosData, setAxiosData, usuarioImg} = useContext(DataProfileProvider)
  let token = localStorage.getItem("token")
  
  




  
    
    
   
    

  return (
    <div className='h-[60px]'>
         <Link to="/profileuser">{
          !token? "" : <img alt='' className="h-[60px] mt-[5px]" src={usuarioImg? usuarioImg: person}/>
         }
         </Link>
    </div>
  )
}

export default ProfileUser