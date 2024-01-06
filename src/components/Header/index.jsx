import { useState } from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useCartProductQuantity } from "../../hooks"
import { Button, Input } from "../Fragments/index.js";

import styles from "./style.module.scss"
import Logo from "../../assets/Logo.svg";

export const Header = ({ cartList, setIsOpen, setSearch }) => {
   const [value, setValue] = useState("");

      const submit = (e) =>{
         e.preventDefault()
         setSearch(value)
         setValue("")               
      }
   
     return (
      <header>
            <div className={`${styles.headerBox} container`}>
               <img src={Logo} alt="Logo Kenzie Burguer" />

               <div>
                  <div>
                     <form onSubmit={submit}>
                        <Input
                           type="text"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                        />
                        <Button type="submit">
                        <MdSearch size={21} color="#828282" />
                        </Button>
                     </form>   
                     <Button onClick={() => setIsOpen(true)}>
                        <MdShoppingCart size={21} color="#828282" />
                        <span>{cartList.reduce((total, product)=> total + product.amount, 0)}</span>               
                     </Button>
                  </div>

               </div>
            </div>
      </header>
   );
};
