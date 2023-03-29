import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
import AdminProducts from './AdminProducts'
import Navbar from './Navbar'
import Inicio from './Inicio'
import ProductSection from './ProductSection'
import PutUser from './PutUser'
import DataImg from "./UseContextProvider"

const MainRoutes = () => {
  return (
    <DataImg>
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/profileuser' element={<PutUser/>}/>
            <Route path='/register'  element={<Register/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/cart'  element={<Cart/>}/>
            <Route path='/productsection' element={<ProductSection/>}/>
            <Route path='/adminproducts'  element={<AdminProducts/>}/>
        </Routes>
    </Router>
    </DataImg>
  )
}

export default MainRoutes