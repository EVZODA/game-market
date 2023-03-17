import React from 'react'
import { useState } from 'react'
import Burguer from './Burguer'
import steamimg from '../img/logosteam.jpg'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

  
  const [open, setopen] = useState(true)


  return (
    
    <div className='Container-navbar flex justify-between px-[25px] bg-cyan-100 bg-cover'>
        <div className='contain-logo space-x-[25px] my-[25px]'>
           <Link to='/inicio'><img className='w-[70px]' src={steamimg}/></Link>
        </div>
        <div className='contain-buscador space-x-[25px] my-[25px]'>
        <select name="lenguajes" id="lang">
        <option value="usuarios">Usuarios</option>
        <option value="categorias">Categorias</option>
        <option value="productos">Productos</option>
        <option value="roles">Roles</option>
      </select>
        <input type="search" mozactionhint="next" placeholder="Ingrese su busqueda" results="5"/>
        <button className='' type="submit">buscar</button>

          
    
        </div>
       <Burguer setopen={setopen} open={open}></Burguer>
           <div className={`absolute flex flex-col items-center right-[17px] top-[70px] bg-orange-200 px-[100px] py-[20px] transition-all duration-[1000ms] ease-in-out ${open===true?"-right-[500px]":""} `}>
            <div className='mx-[20px]'><Link to='/register' >Register</Link></div>
            <div className='mx-[20px]'><Link to='/login' >Login</Link></div>
            <div className='mx-[20px]'><Link to='/cart' >Cart</Link></div>
            <div className='mx-[20px]'><Link to='/products' >Products</Link></div>
            </div>
    </div>
  )
}

export default Navbar