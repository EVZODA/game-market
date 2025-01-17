import React from 'react'
import Instagram from "../../img/instagram.svg"
import Facebook from "../../img/facebook.svg"
import WhatsApp from "../../img/whatsApp.svg"
import Git from "../../img/git.svg"

const Footer = () => {
  return (
    <div className='flex justify-center space-x-8 lg:space-x-24 py-[30px]'>
        <img alt='' className='h-[60px] cursor-pointer' src={Instagram}></img>
        <img alt='' className='h-[60px] cursor-pointer' src={Facebook}></img>
        <img alt='' className='h-[60px] cursor-pointer' src={WhatsApp}></img>
        <img alt='' className='h-[60px] cursor-pointer' src={Git}></img>
    </div>
  )
}

export default Footer