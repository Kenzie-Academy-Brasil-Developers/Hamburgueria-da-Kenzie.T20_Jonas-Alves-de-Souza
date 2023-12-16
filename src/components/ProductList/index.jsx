import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss"

export const ProductList = ({ productList, loading, cartList, setCartList }) => {
   return (
      <>
         {loading ? (<p className="container text04 bold green">Carregando...</p>) : productList.length > 0 ? 
            (  
               <div className="container">
                  <ul className={`${styles.productsBox}`}>
                     {productList.map((product) => (
                        <ProductCard
                           setCartList={setCartList}
                           cartList={cartList} 
                           key={product.id} 
                           product={product} />
                     ))}
                  </ul>
               </div>
            ) : (
            <p className="container text04 bold red">Nenhum resultado encontrado!!!</p>
            )
         }
      </>
   );
};
