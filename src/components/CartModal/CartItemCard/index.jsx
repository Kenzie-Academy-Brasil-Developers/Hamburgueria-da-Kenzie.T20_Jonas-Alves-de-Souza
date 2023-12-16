import { MdDelete } from "react-icons/md";
import { useRemoveProduct } from "../../../hooks/useRemoveProduct";

export const CartItemCard = ({ product, cartList, setCartList }) => {
   return (
      <li>
         <div>
               <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button
            onClick={()=>{
               return useRemoveProduct(product.id, cartList, setCartList)
            }} 
            aria-label="delete" 
            title="Remover item">

            <MdDelete size={21} />

         </button>
      </li>
   );
};
