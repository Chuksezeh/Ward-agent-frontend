import axios from "axios";
import { useEffect, useState } from "react";



const useGetData = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
  useEffect(() => {
      setIsPending(true)
      axios.get(url)
        .then(response => {
  
          if (!response.statusText === "OK") {
            throw Error("Could not fetch data")
          }else{
            setIsPending(false)
          }
          setIsPending(false)
          setData(response.data)
  
          setError(null)
          // console.log("data>>>>>>>>>",data)

        })
        .catch(error => {
          setError(error.message)
          setIsPending(true)
          console.log(error)
        })
    }, [url]);
    
  
    return { data, isPending, error }
  }

  
  export default useGetData