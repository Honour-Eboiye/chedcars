import React from 'react'
import {useState, useEffect} from 'react'
import Loader from './Loader';



const FeaturedCars = () => {
  const url = "https://example-data.draftbit.com/cars?_limit=20";
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
getCars();
  }, [])
  const getCars = async () =>{
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCars(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error')
    }
  }

  if(isLoading){
    return(
      <Loader/>
    )
  }
  return (
    <div className='bg-[#2c5157] py-7' >
      <h1 className='text-4xl font-bold flex items-center justify-center text-white pb-3 '>Our Available Cars</h1>
      <div className='flex flex-wrap'>
        {
          cars.map((car) =>{
            return(
              <div key={car.id} className='rounded-sm shadow-lg w-[300px] h-[350px] p-2 container my-2 backdrop-opacity-70 bg-white'>
                <img src={car.image} alt={car.make_id} className=' w-full object-cover h-1/2 rounded-md'/>
                <div className='h-1/2 px-2 py-4 flex flex-col gap-1'>
                  <p className='italic'>{car.color}</p>
                  <h1 className='font-semibold text-xl'>{car.make_id} - {car.model}</h1>
                  <p>${car.price}</p>
                  <p>{
                    
                    }</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FeaturedCars