import React from 'react'

const HistorialItem = ({history}) => {
    console.log(history)
  return (
    <div className='flex justify-center items-center w-[100vw] lg:max-w-[800px] max-w-[300px]'>
    <div className='h-[210px] lg:h-auto flex flex-col mr-[10px] rounded-[7px] border-black space-y-[4px] bg-white text-black p-[15px] shadow-md'>
        <p className=' underline underline-offset-[2px]'>nombre</p>
        <p className=' underline underline-offset-[2px]'>precio</p>
        <p className=' underline underline-offset-[2px]'>cantidad</p>
        <p className=' underline underline-offset-[2px]'>hora</p>
    </div>
    <li className='grow flex flex-col rounded-[7px] border-black space-y-[4px] bg-white text-black p-[15px] shadow-md'>
        <p>{history.nombre}</p>
        <p>{history.amount}</p>
        <p>{history.quantity}</p>
        <p>{history.trafficLightTTL}</p>
    </li>
    </div>
  )
}

export default HistorialItem