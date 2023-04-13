import React from 'react'
import { BrowserRouter as Router, Route, Routes, Location, Navigate} from 'react-router-dom'
import Cart from '../cart/Cart'
import Login from '../UsuarioConfig/Login'
import Register from '../UsuarioConfig/Register'
import AdminProducts from '../../Products/AdminProducts'
import Navbar from './Navbar'
import Inicio from '../Inicio'
import ProductSection from '../../Products/ProductSection'
import PutUser from '../UsuarioConfig/PutUser'
import DataImg from "../../Context/UseContextProvider"
import UseContextEdition from '../../Context/UseContextEdition'
import AdminCategories from '../../Categories/AdminCategories'
import CategoriesSection from '../../Categories/CategoriesSection'
import IForgetPassword from '../UsuarioConfig/IForgetPassword'
import ResetPasswordParams from '../UsuarioConfig/ResetPasswordParams'
import UserContextCart from '../../Context/UserContextCart'

const MainRoutes = () => {

  const token = localStorage.getItem("token")
  const adminrole = localStorage.getItem("usuario")
  return (
    <UserContextCart>
    <DataImg>
      <UseContextEdition>
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/profileuser' element={!token? "" : <PutUser/>}/>
            <Route path='/register' element={!token? <Register/> : <Navigate to= "/"/>}/>
            <Route path='/login'  element={!token? <Login/> : <Navigate to= "/"/>}/>
            <Route path='/cart'  element={token? <Cart/> : <Navigate to= "/"/>}/>
            <Route path='/productsection' element={adminrole==="ADMIN_ROLE"?<ProductSection/> : <Navigate to= "/"/>}/>
            <Route path='/adminproducts'  element={adminrole==="ADMIN_ROLE"?<AdminProducts/> : <Navigate to= "/"/>}/>
            <Route path='/categoriesection'  element={adminrole==="ADMIN_ROLE"?<CategoriesSection/> : <Navigate to= "/"/>}/>
            <Route path='/admincategories'  element={adminrole==="ADMIN_ROLE"?<AdminCategories/> : <Navigate to= "/"/>}/>
            <Route path='/iforgetpassword' element={!token?<IForgetPassword/> : <Navigate to= "/"/>}/>
            <Route path="/resetpassword/:token" element={<ResetPasswordParams/>} />
          
        </Routes>
    </Router>
    </UseContextEdition>
    </DataImg>
    </UserContextCart>
  )
}

export default MainRoutes