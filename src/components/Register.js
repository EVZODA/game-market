import React from 'react'

const register = () => {
    return (
        <div className='flex flex-col space-y-[7px] px-[8px]'>
        <input className='border-[2px] border-[#8a5422]' placeholder='name'/>
        <input className='border-[2px] border-[#8a5422]' placeholder='lastName' />
        <input className='border-[2px] border-[#8a5422]' placeholder='Ocupattion' />
        <input className='border-[2px] border-[#8a5422]' placeholder='Email' />
        <input className='border-[2px] border-[#8a5422]' placeholder='password' />
        <input className='border-[2px] border-[#8a5422]' placeholder='repeatPassword'/>
        <button className='border-[2px] border-[#8a5422] w-full'>enviar</button>
        <p className=""></p>
        </div>
      )
    }


export default register