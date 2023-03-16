import React from 'react'
import { useState } from 'react'
import Burguer from './Burguer'
import steamimg from '../img/logosteam.jpg'


const Navbar = () => {

  
  const [open, setopen] = useState(true)


  return (
    
    <div className='Container-navbar flex justify-between px-[25px] bg-cyan-100 bg-cover'>
        <div className='contain-logo space-x-[25px] my-[25px]'>
            <a className='' href=''><img className='w-[70px]' src={steamimg}/></a>
        </div>
        <div className='contain-buscador space-x-[25px] my-[25px]'>
        <input type="search" mozactionhint="next" placeholder="Ingrese su busqueda" results="5"></input>
        </div>
       <Burguer setopen={setopen} open={open}></Burguer>
           <div className={`absolute flex flex-col items-center right-[17px] top-[70px] bg-orange-200 px-[100px] py-[20px] transition-all duration-[1000ms] ease-in-out ${open===true?"-right-[500px]":""} `}>
            <a className='mx-[20px]' href="">login</a>
            <a className='mx-[20px]' href="">registrarse</a>
            <a className='mx-[20px]' href="">carrito</a>
            <a className='mx-[20px]' href="">productos</a>
            </div>
    </div>
  )
}

export default Navbar