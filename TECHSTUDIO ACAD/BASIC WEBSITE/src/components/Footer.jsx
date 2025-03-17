import React from 'react'

const Footer = () => {
  return (
    <div className='conatainer flex items-center flex-col mx-auto  py-1 bg-[#050408] text-white'>
      <h1 className='font-serif text-2xl font-semibold italic'>CHED Motors</h1>
      <p>{new Date().getFullYear()}, All Rights Reserved</p>
    </div>
  )
}

export default Footer