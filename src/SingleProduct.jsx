import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from './pages/home/Product';
import ReadMore from './ReadMore';
import ReadMore2 from './ReadMore2';
import { BsCalendar2Check, BsGeoAlt, BsMap } from 'react-icons/bs';

const SingleProduct = () => {
  const url = "https://example-data.draftbit.com/cars?_limit=20";
  const {cars, isLoading} = Product(url)
  const {productId} = useParams();
  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {
        !isLoading &&
        <div className='border-b-7 p-5'>
          {
            cars.filter((car) => productId === car.id.toString()).map((car) => (
              <div key={car.id}>

                <div className='h-1/2'>
                 <div className=''>
                  <img src={car.image} alt={car.make_id} className='w-full h-[200px] object-cover rounded-md sm:h-[400px]'/>
                 </div>

                  <div className='flex flex-col gap-5 p-5'>
                    <h1 className='text-black text-xl sm:text-2xl md:text-4xl'>{car.make_id} - {car.model}</h1>
                    <p className='text-black sm:text-2xl md:text-4xl'>{car.color}</p>
                    <ReadMore2 text={car.description} maxLength={100}/>
                  </div>

                </div>

                <div className='px-5 flex flex-col gap-5'>

                  <div className='flex gap-3 font-semibold'>
                    <div className=' p-2 rounded-sm border-1 border-gray-200 flex flex-col justify-center items-center'>
                      <BsCalendar2Check size={23}/>
                      <p>{car.year}</p>
                    </div>
                    <div className='p-2 rounded-sm border-1 border-gray-200 flex flex-col justify-center items-center'>
                      <BsGeoAlt size={23}/>
                      <p>{car.city}</p>
                    </div>
                    <div className='p-2 rounded-sm border-1 border-gray-200 flex flex-col justify-center items-center'>
                      <BsMap size={23}/>
                      <p>{car.state}</p>
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <p className=' text-green-700 text-xl sm:text-2xl'>${car.price}</p>
                    <button className='cursor-pointer w-full max-w-[300px] py-2 px-1 bg-[#2c5157]  text-white rounded-sm my-2'>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default SingleProduct