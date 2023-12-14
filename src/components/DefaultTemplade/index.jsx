import { Header } from "../Header"

export const DefaultTemplade = ({children, cartList, setIsOpen, setSearch}) => {
    return(
        <>
            <Header
                setSearch={setSearch}
                setIsOpen={setIsOpen}
                cartList={cartList} />
            <main>
                {children}
            </main>
            
        </>
    )
}  