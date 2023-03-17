import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex flex-col space-y-[7px] px-[8px] items-center justify-center h-[500px]'>
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='name'/>
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='lastName' />
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Ocupattion' />
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='Email' />
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='password' />
        <input className='border-[2px] border-[#8a5422] w-[500px]' placeholder='repeatPassword'/>
        <button className='border-[2px] border-[#8a5422] w-[500px]'>enviar</button>
        <div className='mx-[20px]'><Link to='/login'>Si ya tiene una cuente inicia sesion aqui</Link></div>
        </div>
      )
    }


export default Register