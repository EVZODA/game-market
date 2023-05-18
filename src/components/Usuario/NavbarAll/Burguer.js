import React from 'react'
import closed from '../../../img/close.svg'
import openimg from '../../../img/menu.png'



const Burguer = ({ setopen, open}) => {

  

  return (
    <div className='relative lg:top-[3px] lg:right-[30px] flex flex-col items-center'>
        <button onClick={()=>{setopen(true)}} className={`${open===false?"visible":"hidden"}`} ><img className='h-[60px] ' src={closed}/></button>
        <button onClick={()=>{setopen(false)}} className={`${open===true?"visible":"hidden"}`} ><img className='h-[60px] ' src={openimg}/></button>
    </div>
  )
}

export default Burguer