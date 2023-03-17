import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='contain-login flex flex-col px-[8px] items-center justify-center h-[600px]'>
        <input className='border-[2px] my-[2px] border-[#8a5422] w-[500px]' placeholder='email'/>
        <input className='border-[2px] my-[2px] border-[#8a5422] w-[500px]' placeholder='password'/>
        <button className='border-[2px] my-[2px] border-[#8a5422] w-[500px]'>enviar</button>
        <div className='mx-[20px] my-[20px] border-[2px] border-[#8a5422] w-[500px]'><Link to='/register' >Si no tiene una cuenta creala aqui</Link></div>
    </div>
  )
}

export default Login