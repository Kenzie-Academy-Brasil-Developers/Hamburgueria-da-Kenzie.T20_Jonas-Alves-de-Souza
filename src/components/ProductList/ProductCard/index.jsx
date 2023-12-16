import { useAddNewProduct } from "../../../hooks/useAddNewProduct"
import styles from "./style.module.scss"

export const ProductCard = ({ product, cartList, setCartList }) => {
        
    return(
        <li>
            <div className={`${styles.cardProduct}`}>
                <div className={`${styles.top}`}>
                    <img src={product.img} alt={product.name} />         
                </div>
                <div className={`${styles.below}`}>
                    <h3 className="title03 grey">{product.name}</h3>
                    <span className="text03 grey">{product.category}</span>
                    <span className="text04 green bold">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                    <button className="button02" onClick={() => {
                        return useAddNewProduct(product, cartList, setCartList)
                    }} >Adicionar</button>
                </div>
            </div>
        </li>
    )
}