
import shoppingCart from '../../../img/shoppingCart.svg'
import { Link } from 'react-router-dom'

const ProfileUser = () => {


  const token = localStorage.getItem("token")




  
    
  
   
    

  return (
    <div className='h-[60px]'>
         <Link to="/cart">{
          !token? "" : <img alt='' className="h-[60px] mt-[5px]" src={shoppingCart}/>
         }
         </Link>
    </div>
  )
}

export default ProfileUser