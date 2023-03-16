import React from 'react'
import closed from '../img/cruz.png'
import openimg from '../img/menu.png'



const Burguer = ({ setopen, open}) => {

  

  return (
    <div className='relative top-[3px] right-[30px]'>
        <button onClick={()=>{setopen(true)}} className={`${open===false?"visible":"hidden"}`} ><img className={'h-[60px]'} src={closed}/></button>
        <button onClick={()=>{setopen(false)}} className={`${open===true?"visible":"hidden"}`} ><img className='h-[60px]' src={openimg}/></button>
    </div>
  )
}

export default Burguer