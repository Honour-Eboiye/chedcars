import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className='absolute container w-screen h-screen bg-gray-800 backdrop-blur-3xl text-white'>
      <div className='flex flex-col gap-9 font-semibold items-center justify-center pt-20'>
        <Link to="/about" className='hover:border-b-2' onClick={handleLink}><h1>ABOUT</h1></Link>
        <Link to="/contact" className='hover:border-b-2' onClick={handleLink}><h1>CONTACT US</h1></Link>
        <Link to="/services" className='hover:border-b-2' onClick={handleLink}><h1>SERVICES</h1></Link>
        <Link to="#" className='hover:border-b-2' onClick={handleLink}><h1>LOGIN</h1></Link>
        <Link to="#" className='hover:border-b-2' onClick={handleLink}><h1>SIGN UP</h1></Link>
      </div>

    </div>
  )
}

export default Sidebar