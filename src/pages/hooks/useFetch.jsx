import {useState, useEffect} from 'react'

export const useFetch = (api) =>{
  const [isLoading, setIsLoading] =useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() =>{
    getData();
  }, [api])
  const getData = async () =>{
    try {
      const response = await fetch(api);
      const data = await response.json();
      setInfo(data);
      setIsLoading(false)
    } catch (error) {
      console.log('Error Fetching Data');
      setIsLoading(true)
    }
  }

  return {info,isLoading}
}

