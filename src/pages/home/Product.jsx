import React, {useState, useEffect} from 'react'


export const Product = (api) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>{
getCars();
  }, [api])
  const getCars = async () =>{
    try {
      const response = await fetch(api);
      const data = await response.json();
      setCars(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error')
    }
  }
  return {cars, isLoading}
}

