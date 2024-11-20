import { useContext } from 'react'
import person from '../../../img/person.svg'
import { Link } from 'react-router-dom'
import {DataProfileProvider } from '../../Context/UseContextProvider'

const ProfileUser = () => {

  const {usuarioImg} = useContext(DataProfileProvider)
  let token = localStorage.getItem("token")
  
  




  
    
    
   
    

  return (
    <div className=''>
         <Link to="/profileuser">{
          token?  <img alt='' className="h-[40px] border-white rounded-[7px] mb-[20px] lg:mb-[0px]" src={usuarioImg? usuarioImg: person}/> : ""
         }
         </Link>
    </div>
  )
}

export default ProfileUser