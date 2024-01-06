import { useAddNewProduct } from "../../../hooks"
import { Button } from "../../Fragments/Button"
import styles from "./style.module.scss"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = ()=> {

    toast.success('Produto adicionado com sucesso!', {
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

export const ProductCard = ({ product, cartList, setCartList }) => {
        
    return(
        
            <li>
                <div className={`${styles.cardProduct}`}>
                    <div className={`${styles.top}`}>
                        <img src={product.img} alt={product.name} />         
                    </div>
                    <div className={`${styles.below}`}>
                        <h3 className="title03 grey">{product.name}</h3>
                        <span className="text03 grey">{product.category}</span>
                        <span className="text04 green bold">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                        <Button className="button02" onClick={() => {

                            notify()
                            useAddNewProduct(product, cartList, setCartList)
                        }
                        } >Adicionar</Button>
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

        
    )
}