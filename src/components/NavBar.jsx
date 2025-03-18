import React, { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { BsXSquare } from 'react-icons/bs'
import Sidebar from './Sidebar'

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



  return (
    <>
      <header className='bg-[#2c5157]'>
      <div className='container text-white'>
        <div className='flex justify-between items-center font-medium'>
          <h1 className='font-serif text-2xl font-semibold italic'>CHED Motors</h1>
          <div className='invisible sm:visible flex gap-5'>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            <a href="#">Services</a>
            <button onClick={handleMenu} id='Menu' className='cursor-pointer'>
              {
              hamMenu
              }
              
              
            </button>
          </div>
        </div>
    </div>
    </header>
    {isSidebarVisible && <Sidebar className='visible sm:invisible'/>}
    </>
  )
}

export default NavBar