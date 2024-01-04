import { MdDelete } from "react-icons/md";
import { useRemoveProduct } from "../../../hooks";
import { Button, Input } from "../../Fragments";
import styles from "./style.module.scss"

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
            </div>
               <form>
                  <Input
                     label="Qtd:"
                     type="number" 
                  />
                  <Button
                     onClick={()=>{

                     }}
                  >+</Button>
               </form>
            <div>
               <Button
                  onClick={()=>{
                     return useRemoveProduct(product.id, cartList, setCartList)
                  }} 
                  aria-label="delete" 
                  title="Remover item">

                  <MdDelete size={21} color="#BDBDBD" />
               </Button>
            </div>
         </div>
      </li>
   );
};
