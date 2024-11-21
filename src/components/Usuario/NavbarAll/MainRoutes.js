import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Cart from '../cart/Cart'
import Login from '../UsuarioConfig/Login'
import Register from '../UsuarioConfig/Register'
import AdminProducts from '../../Products/AdminProducts'
import Navbar from './Navbar'
import Inicio from '../Inicio'
import ProductSection from '../../Products/ProductSection'
import PutUser from '../UsuarioConfig/PutUser'
import AdminCategories from '../../Categories/AdminCategories'
import CategoriesSection from '../../Categories/CategoriesSection'
import IForgetPassword from '../UsuarioConfig/IForgetPassword'
import ResetPasswordParams from '../UsuarioConfig/ResetPasswordParams'
import UserContextCart from '../../Context/UserContextCart'
import PurchaseCartSuccess from '../cart/PurchaseCartSuccess'
import DataProfile from '../../Context/UseContextProvider'
import HistorialPayments from '../cart/HistorialPayments'
import SearchInfo from './SearchInfo'
import Footer from '../../Footer/Footer'



const MainRoutes = () => {
  const token = localStorage.getItem("token")
  const adminrole = localStorage.getItem("usuario")

  

  return (
    <UserContextCart>
    <DataProfile>
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/queryPayment' element={<PurchaseCartSuccess/>}/>
            <Route path='/profileuser' element={!token? "" : <PutUser/>}/>
            <Route path='/register' element={!token? <Register/> : <Navigate to= "/"/>}/>
            <Route path='/login'  element={!token? <Login/> : <Navigate to= "/"/>}/>
            <Route path='/cart'  element={token && adminrole!=="" ? <Cart/> : <Navigate to= "/"/>}/>
            <Route path='/historialPayments' element={token? <HistorialPayments/> : <Navigate to= "/"/>}/>
            <Route path='/searchInfo' element={<SearchInfo/>}/>
            <Route path='/productsection' element={adminrole==="ADMIN_ROLE"?<ProductSection/> : <Navigate to= "/"/>}/>
            <Route path='/adminproducts'  element={adminrole==="ADMIN_ROLE"?<AdminProducts/> : <Navigate to= "/"/>}/>
            <Route path='/categoriesection'  element={adminrole==="ADMIN_ROLE"?<CategoriesSection/> : <Navigate to= "/"/>}/>
            <Route path='/admincategories'  element={adminrole==="ADMIN_ROLE"?<AdminCategories/> : <Navigate to= "/"/>}/>
            <Route path='/iforgetpassword' element={!token?<IForgetPassword/> : <Navigate to= "/"/>}/>
            <Route path="/resetpassword/:token" element={<ResetPasswordParams/>} />
          
        </Routes>
        <Footer/>
    </Router>
    </DataProfile>
    </UserContextCart>
  )
}

export default MainRoutes