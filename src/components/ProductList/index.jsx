import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, loading, addNewProduct }) => {
   return (
      <>
         {loading ? (<p>Carregando...</p>) : productList.length > 0 ? 
            ( 
               <ul>
                  {productList.map((product) => (
                     <ProductCard
                     addNewProduct={addNewProduct} 
                     key={product.id} 
                     product={product} />
                  ))}
               </ul> 
            ) : (
            <p>Nenhum resultado encontrado</p>
            )
         }
      </>
   );
};
