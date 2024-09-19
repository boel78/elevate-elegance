import { useCallback, useState } from "react";
import { PRODUCTS } from "../products";

function initializeProducts(){
    /*Axios.get("http://localhost:8080/api/product").then((res) => {
            setProducts(res.data)
        })*/
    
}

export function useProducts(){
    const [products, setProducts] = useState(PRODUCTS)

    const filterProduct = useCallback((filterType, filterValue) => {
        if(filterType === "" && filterValue === ""){
            return products
        }
        else{
            const filteredArray = PRODUCTS.filter((produkt) => produkt[filterType] === filterValue)
            return filteredArray.length > 0 ? filteredArray : []
        }       
    },[])

    return{
        products,
        filterProduct
    }
}