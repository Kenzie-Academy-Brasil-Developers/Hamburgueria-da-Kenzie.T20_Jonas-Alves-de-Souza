import { useEffect } from "react";
import { api } from "../services/api.js"

export const useRenderProductList = (setLoading, setProductList) => {
    
    return useEffect(
        ()=>{
           setLoading(true)
           const getProducts = async () => {
              try {
                 const { data } = await api.get("products")
                 setProductList( data )
              }
              catch (error) {
                 console.log(error)
              }
              finally {
                 setLoading(false)                  
              }
           }
           getProducts()
        },[])   
}