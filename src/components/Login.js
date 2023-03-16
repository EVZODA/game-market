import React from 'react'

const Login = () => {
  return (
    <div className='contain-login'>
        <input className='border-[2px] border-[#8a5422]' placeholder='email'/>
        <input className='border-[2px] border-[#8a5422]' placeholder='password'/>
        <button className='border-[2px] border-[#8a5422] w-full'>enviar</button>
    </div>
  )
}

export default Login