import React, { useState, useEffect } from 'react'
import { BsList } from 'react-icons/bs'
import { BsXSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [isMenuOPen, setIsMenuOpen] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const [hamMenu, setHamMenu] = useState(<BsList className='visible sm:invisible' size={"25px"}/>)
  // const [hamMenuClose, setHamMenuClose] = useState(<BsXSquare className='visible sm:invisible'/>)
  
  const handleMenu = () =>{
    if(isMenuOPen){
      setHamMenu(<BsList className='visible sm:invisible' size={"25px"}/>)
      setIsSidebarVisible(false)
      setIsMenuOpen(false)

    }else{
      setHamMenu(<BsXSquare className='visible sm:invisible' size={"25px"}/>)
      setIsMenuOpen(true)
      setIsSidebarVisible(true)
    }
  }

  const handleLink = () => {
    setIsMenuOpen(false)
    setIsSidebarVisible(false)
    setHamMenu(<BsList className='visible sm:invisible' size={"25px"}/>)
  }



  return (
    <>
      <header className='bg-[#2c5157]'>
      <div className='container text-white'>
        <div className='flex justify-between items-center font-medium'>
          <Link to='/'><h1 className='font-serif text-2xl font-semibold italic'>CHED Motors</h1></Link>
          <div className='invisible sm:visible flex gap-5'>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/services'>Services</Link>
            <button onClick={handleMenu} id='Menu' className='cursor-pointer'>
              {
              hamMenu
              }
              
              
            </button>
          </div>
        </div>
    </div>
    </header>
    {isSidebarVisible && 
      <div className='absolute container w-screen h-screen bg-gray-800 backdrop-blur-3xl text-white visible sm:invisible'>
            <div className='flex flex-col gap-9 font-semibold items-center justify-center pt-20'>
              <Link to="/about" className='hover:border-b-2' onClick={handleLink}><h1>ABOUT</h1></Link>
              <Link to="/contact" className='hover:border-b-2' onClick={handleLink}><h1>CONTACT US</h1></Link>
              <Link to="/services" className='hover:border-b-2' onClick={handleLink}><h1>SERVICES</h1></Link>
              <Link to="#" className='hover:border-b-2' onClick={handleLink}><h1>LOGIN</h1></Link>
              <Link to="#" className='hover:border-b-2' onClick={handleLink}><h1>SIGN UP</h1></Link>
            </div>
      
          </div>
    }
    </>
  )
}

export default NavBar