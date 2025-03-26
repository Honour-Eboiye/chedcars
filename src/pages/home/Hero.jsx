import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[url("https://cdn.pixabay.com/photo/2021/08/23/23/07/car-6569008_1280.jpg")] h-screen max-h-[500px] text-white bg-no-repeat bg-cover bg-center'>
      <div className='container w-full h-full flex items-center justify-start '>
        <div className='max-w-[600px]'>
          <h1 className='font-serif text-4xl font-semibold italic'>CHED Motors</h1>
          <p className='font-semibold shadow-sm'>Drive Your Dream - Find the Perfect Car at the Best Price!</p>
          <button className='cursor-pointer px-3 py-2 bg-[#050408] rounded-md mt-2'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero