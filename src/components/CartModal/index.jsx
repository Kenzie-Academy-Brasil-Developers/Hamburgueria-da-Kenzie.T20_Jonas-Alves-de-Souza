import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useClearCart, useOutclick, useKeydown } from "../../hooks";
import styles from "./style.module.scss"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = ()=> {

   toast.error('Não há mais produtos no carrinho!', {
      position: "top-center",
      autoClose: 0.3 * 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

}

export const CartModal = ({ cartList, setCartList, setIsopen }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price * product.amount;
   }, 0);

   const modalRef = useOutclick(()=> {
      setIsopen(false)      
   })

   const buttonRef = useKeydown("Escape", (element)=>{
      element.click()
   })

   return (
      <div
         className={`${styles.modalOverlay}`} 
         role="dialog"
         >
         <div 
            className={`${styles.modalBox}`} 
            ref={modalRef}>
               
            <div className={`${styles.topModal}`}>
               <h2 className="text04 bold white">Carrinho de compras</h2>
               <button
                  ref={buttonRef}
                  onClick={() => setIsopen(false)} 
                  aria-label="close" 
                  title="Fechar">

                  <MdClose size={21} color="#FFFFFF80"/>
               </button>
            </div>

            <div className={`${styles.middleModal}`}>
               <ul>

                  {cartList.map((product) => {

                     return (

                    <CartItemCard
                     setCartList={setCartList}
                     cartList={cartList} 
                     key={product.id} 
                     product={product} />
                     
                     )

                  })}
               </ul>
            </div>

            <div className={`${styles.bottomModal}`}>
               <div>
                  <p className="text04 bold grey600">Total</p>
                  <span className="text04 bold grey300">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button
                  className="button01"
                  onClick={()=> {
                  notify()
                  useClearCart(setCartList)
               }}
               >Remover todos</button>
            </div>
         </div>
       
         <ToastContainer
            position="top-center"
            autoClose={0.3 * 1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" 
         />
      </div>
   );
};
