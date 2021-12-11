import { useState } from "react";

export const useFetching = (callback) => {
   const [isLoading, setIsLoading] = useState(false)
   const [err, setEror] = useState("")
   const fetching = async () => 
   {
      try {
         setIsLoading(true)
         await callback()
      }
      catch (e) {
         setEror(e.message)
      }
      finally {
         setIsLoading(false)
      }
   }
   return [fetching, isLoading, err]

}