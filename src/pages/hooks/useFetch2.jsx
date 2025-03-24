import {useState, useEffect} from 'react'


export const useFetch =  (api) => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    const getData = async () =>{
      try {
        const response = await fetch(api);
        const data = await response.json();
        setInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetching data")
        setIsLoading(true);
      }
    }
    getData();
  }, [api])

  return {info, isLoading}
}
