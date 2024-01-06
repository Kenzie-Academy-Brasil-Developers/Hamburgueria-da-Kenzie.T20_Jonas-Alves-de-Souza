import { MdDelete, MdAdd } from "react-icons/md";
import { useRemoveProduct, useReduceQuantity, useAddNewProduct } from "../../../hooks";
import { Button } from "../../Fragments";
import styles from "./style.module.scss"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notifyRemoveProduct = ()=> {

   toast.warn('Produto Removido', {
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

const notifyAddProduct = ()=> {
   toast.success('Produto adicionado com sucesso!',{
      position: "top-center",
      autoClose: 0.3 * 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   })
}

export const CartItemCard = ({ product, cartList, setCartList }) => {


   return (
      <li>
         <div className={`${styles.cardItemBox}`}>
            <div>
               <div className={`${styles.imgContainer}`}>
                  <img src={product.img} alt={product.name} />
               </div>
               <div className={`${styles.descriptionItemContainer}`}>
                  <h3 className="text04 bold">{product.name}</h3>
                  <p className="text03 bold green">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
               </div>

            </div >

            <div className={`${styles.addProductsCartContainer} btn`}>
               <span className="text04 grey300">
                  {product.amount}
               </span>
               <Button
                  onClick={()=>{
                     notifyAddProduct()
                     useAddNewProduct(product, cartList, setCartList)
                  }}>
                  <MdAdd size={21} color="#828282" />
               </Button>

            </div>
            
            <div>
               <Button
                  onClick={()=>{
                     notifyRemoveProduct()
                     product.amount <= 1 ? useRemoveProduct(product.id, cartList, setCartList) : useReduceQuantity(product, cartList, setCartList)
                  }}
                  aria-label="delete" 
                  title="Remover item">

                  <MdDelete size={21} color="#828282" />
               </Button>               
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
      </li>
   );
};
