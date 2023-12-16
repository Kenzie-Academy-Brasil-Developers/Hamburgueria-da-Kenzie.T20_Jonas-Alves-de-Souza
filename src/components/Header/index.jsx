import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useCartProductQuantity } from "../../hooks/useCartProductQuantity.js"
import styles from "./style.module.scss"

export const Header = ({ cartList, setIsOpen, setSearch }) => {
   const [value, setValue] = useState("");

      const submit = (e) =>{
         e.preventDefault()
         setSearch(value)
         setValue("")               
      }
   
     return (
      <header>
         <div className={`container`}>
            <div className={`${styles.headerBox}`}>
               <img src={Logo} alt="Logo Kenzie Burguer" />
               <div>
                  <div>
                     <button onClick={() => setIsOpen(true)}>
                        <MdShoppingCart size={21} color="#828282" />
                        <span>{useCartProductQuantity(cartList)}</span>
                     </button>
                  </div>
                  <form onSubmit={submit}>
                     <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                     />
                     <button type="submit">
                     <MdSearch size={21} color="#828282" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </header>
   );
};
