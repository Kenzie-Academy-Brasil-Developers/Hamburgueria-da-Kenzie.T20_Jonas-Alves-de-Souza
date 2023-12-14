import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { ProductList } from "../../components/ProductList";
import { DefaultTemplade } from "../../components/DefaultTemplade";
import { api } from "../../services/api";
import { object } from "prop-types";


export const HomePage = () => {

   const listLocalStorage = localStorage.getItem("@CARTLIST")
   
   const [loading, setLoading] = useState(false)
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState( listLocalStorage ? JSON.parse(listLocalStorage) : []);
   const [isOpen, setIsOpen] = useState(false)
   const [search, setSearch] = useState("")
   

   // useEffect montagem - carrega os produtos da API e joga em productList
      useEffect(
         ()=>{
            setLoading(true)
            const getProducts = async () => {
               try {
                  const { data } = await api.get("products")
                  setProductList( data )
               }
               catch (error) {
                  console(error)
               }
               finally {
                  setLoading(false)                  
               }
            }
            getProducts()
         },[]) 

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
         useEffect(()=>{
            localStorage.setItem("@CARTLIST", JSON.stringify(cartList))               
         },[cartList])

   // adição, exclusão, e exclusão geral do carrinho
         const addNewProduct = (cartData) => {
            const product = { ...cartData, id: crypto.randomUUID()}            
            return setCartList([ ...cartList, product])            
         }
         const removeProduct = (productId) => {
            const data = cartList.filter(product => product.id !== productId)
            const setData = setCartList(data)
            return setData
         }
         const clearCart = () => {
            return setCartList([])
         }

   // renderizações condições e o estado para exibir ou não o carrinho    
   
   // filtro de busca
         const productsResult = productList.filter((product) => {
            const searchFilter = search === "" ? true : product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())

            return searchFilter
         })

   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <DefaultTemplade
            setSearch={setSearch}
            setIsOpen={setIsOpen}
            cartList={cartList} >

            <ProductList
               loading={loading} 
               productList={productsResult} 
               addNewProduct={addNewProduct} />

            { isOpen ? <CartModal
               setIsopen={setIsOpen}
               clearCart={clearCart}
               removeProduct={removeProduct} 
               cartList={cartList} /> : null }
            
         </DefaultTemplade>
      </>
   );
};
