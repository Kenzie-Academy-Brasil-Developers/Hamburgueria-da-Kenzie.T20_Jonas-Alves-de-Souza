export const useCartProductQuantity = (array) => {
    const quantity = array.reduce((total, product) => total + product.amout, 0)

    console.log(quantity)
 } 