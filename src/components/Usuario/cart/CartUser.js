
import shoppingCart from '../../../img/shoppingCart.svg'
import { Link } from 'react-router-dom'


const ProfileUser = () => {


  const token = localStorage.getItem("token")
  const userRole = localStorage.getItem("usuario")

 



  
    
  
   
    

  return (
    <div className='my-[20px] lg:my-[0px]'>
         <Link to="/cart">{
          !token || !userRole ? "" : <img alt='' className="h-[40px]" src={shoppingCart}/>
         }
         </Link>
    </div>
  )
}

export default ProfileUser