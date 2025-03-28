import React from 'react'
import {BounceLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-[#2c5157]'>
      <BounceLoader color={"#ffff"} size={30}></BounceLoader>
    </div>
  )
}

export default Loader