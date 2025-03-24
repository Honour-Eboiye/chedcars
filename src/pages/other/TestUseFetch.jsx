import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { BeatLoader } from 'react-spinners'

const TestUseFetch = () => {
  const api = "www.google.com"
  const {info, isLoading} = useFetch(api);
  if(isLoading){
    <div className='w-screen h-screen bg-white flex items-center justify-center'>
      <BeatLoader size={25}/>
    </div>
  }
  return (
    <div>
      {
      info.map((item) =>{
        <li key={item.id}>{item.make_model}</li>
      })
    }
    </div>
  )
}

export default TestUseFetch