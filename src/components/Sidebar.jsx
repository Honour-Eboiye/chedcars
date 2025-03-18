import React from 'react'

const Sidebar = () => {

  return (
    <div className='absolute container w-screen h-screen bg-gray-800 backdrop-blur-3xl text-white'>
      <div className='flex flex-col gap-9 font-semibold items-center justify-center pt-20'>
        <a href="#" className='hover:border-b-2'><h1>ABOUT</h1></a>
        <a href="#" className='hover:border-b-2'><h1>CONTACT US</h1></a>
        <a href="#" className='hover:border-b-2'><h1>SERVICES</h1></a>
        <a href="#" className='hover:border-b-2'><h1>LOGIN</h1></a>
        <a href="#" className='hover:border-b-2'><h1>SIGN UP</h1></a>
      </div>

    </div>
  )
}

export default Sidebar