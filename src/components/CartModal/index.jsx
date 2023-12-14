import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, removeProduct, clearCart, setIsopen }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button
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
                  removeProduct={removeProduct} 
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
               return clearCart()
            }}
            >Remover todos</button>
         </div>
      </div>
   );
};
