import { useEffect } from "react"

export const useSaveProductsCart = (cartList) => {
    return useEffect(()=>{
        localStorage.setItem("@CARTLIST", JSON.stringify(cartList))               
     },[cartList])
}