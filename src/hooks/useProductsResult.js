export const useProductsResult = (productList, search, ) => { 
    const filter = productList.filter((product) => {
        const searchFilter = search === "" ? true : 
            product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        return searchFilter
 })

    return filter
}
