 export const useAddNewProduct = (cartData, cartList, setCartList) => {
      const product = { ...cartData, id: crypto.randomUUID(), amount: 1 }

      const existingProduct = cartList.find((item)=> item.name === product.name)
         
      if ( existingProduct ) {
            const cartUpdated = cartList.map((item) => {
              if (item.name === product.name) {
                return {...item, amount: item.amount + 1};
              }
              return item;
            })
            setCartList(cartUpdated);
          } else {
            const cartUpdated = {...product, amount: 1};
            setCartList([...cartList, cartUpdated]);
          }
                              
}  

