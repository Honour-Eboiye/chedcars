import React from 'react'

const NavBar = () => {
  return (
    <header className='bg-[#2c5157]'>
      <div className='container text-white'>
        <div className='flex justify-between items-center font-medium'>
          <h1 className='font-serif text-2xl font-semibold italic'>CHED Motors</h1>
          <div className='flex gap-5'>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Services</a>
          </div>
        </div>
    </div>
    </header>
  )
}

export default NavBar