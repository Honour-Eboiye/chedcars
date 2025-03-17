import React from 'react'
import {PacmanLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#2c5157]'>
      <PacmanLoader color={"#ffff"}></PacmanLoader>
    </div>
  )
}

export default Loader