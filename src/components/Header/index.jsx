import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { useCartProductQuantity } from "../../hooks/useCartProductQuantity.js"

export const Header = ({ cartList, setIsOpen, setSearch }) => {
   const [value, setValue] = useState("");

      const submit = (e) =>{
         e.preventDefault()
         setSearch(value)
         setValue("")               
      }
   
     return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{useCartProductQuantity(cartList)}</span>
            </button>
            <form onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
