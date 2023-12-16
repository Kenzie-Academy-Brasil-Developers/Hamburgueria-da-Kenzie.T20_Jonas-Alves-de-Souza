import { useState } from "react"
import { CartModal } from "../../components/CartModal"
import { ProductList } from "../../components/ProductList"
import { DefaultTemplade } from "../../components/DefaultTemplade"
import { useRenderProductList } from "../../hooks/useRenderProductList"
import { useSaveProductsCart } from "../../hooks/useSaveProductsCart"
import { useProductsResult } from "../../hooks/useProductsResult"

export const HomePage = () => {

   const listLocalStorage = localStorage.getItem("@CARTLIST")
   
   const [loading, setLoading] = useState(false)
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState( listLocalStorage ? JSON.parse(listLocalStorage) : []);
   const [isOpen, setIsOpen] = useState(false)
   const [search, setSearch] = useState("")

      useRenderProductList(setLoading, setProductList)

      useSaveProductsCart(cartList)
      

   return (
      <>
         <DefaultTemplade
            setSearch={setSearch}
            setIsOpen={setIsOpen}
            cartList={cartList} >

            <ProductList
               cartList={cartList}
               setCartList={setCartList}
               loading={loading} 
               productList={useProductsResult(productList, search)} />

            { 
               isOpen ? <CartModal
               setIsopen={setIsOpen}
               setCartList={setCartList} 
               cartList={cartList} /> : null 
            }
            
         </DefaultTemplade>
      </>
   );
};
