import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useClearCart } from "../../hooks/useClearCart";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/usekeydown";
import styles from "./style.module.scss"

export const CartModal = ({ cartList, setCartList, setIsopen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
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
         ref={modalRef} 
         role="dialog">
         <div className={`${styles.modalBox}`}>
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
                  {cartList.map((product) => (
                     <CartItemCard
                     setCartList={setCartList}
                     cartList={cartList} 
                     key={product.id} 
                     product={product} />
                  ))}
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
                  return useClearCart(setCartList)
               }}
               >Remover todos</button>
            </div>
         </div>
      </div>
   );
};
