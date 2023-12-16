import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useClearCart } from "../../hooks/useClearCart";
import { useOutclick } from "../../hooks/useOutclick";
import { useKeydown } from "../../hooks/usekeydown";

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
         ref={modalRef} 
         role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button
               ref={buttonRef}
               onClick={() => setIsopen(false)} 
               aria-label="close" 
               title="Fechar">

               <MdClose size={21} />
            </button>
         </div>
         <div>
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
         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
            <button
            onClick={()=> {
               return useClearCart(setCartList)
            }}
            >Remover todos</button>
         </div>
      </div>
   );
};
