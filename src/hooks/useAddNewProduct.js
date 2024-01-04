export const useAddNewProduct = (cartData, cartList, setCartList) => {
      const product = { ...cartData, id: crypto.randomUUID(), }
      return setCartList([ ...cartList, product])               
} 