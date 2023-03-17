import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import Navbar from './Navbar'
import Inicio from './Inicio'

const MainRoutes = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/register'  element={<Register/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/cart'  element={<Cart/>}/>
            <Route path='/products'  element={<Products/>}/>
        </Routes>
    </Router>
  )
}

export default MainRoutes