export const useRemoveProduct = (productId, cartList, setCartList) => {
    const data = cartList.filter(product => product.id !== productId)
    const setData = setCartList(data)
    return setData
 }
