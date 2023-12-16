export const useSaveProductModal = (cartList) => {
    return useEffect(()=>{
        localStorage.setItem("@CARTLIST", JSON.stringify(cartList))               
     },[cartList])
} 