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

    const sortProducts = (sortOption, productArray, attributeName) => {  
        if(productArray){
            let newArray = productArray
            switch(sortOption){
                case "A-Z":
                    newArray = productArray.sort((a, b) => {
                        const nameA = a[attributeName].toUpperCase()
                        const nameB = b[attributeName].toUpperCase()
                        if(nameA < nameB){
                            return -1
                        }
                        if(nameA > nameB){
                            return 1
                        }
        
                        return 0
                    });
                    break;
                case "Z-A":
                    newArray = productArray.sort((a, b) => {
                        const nameA = a[attributeName].toUpperCase()
                        const nameB = b[attributeName].toUpperCase()
                        if(nameA < nameB){
                            return 1
                        }
                        if(nameA > nameB){
                            return -1
                        }
        
                        return 0
                    });
                    break;
                case "New first":
                    newArray = productArray.sort((a, b) => {
                        const dateA = new Date(a.added)
                        const dateB = new Date(b.added)
                        return Number(dateB) - Number(dateA)
                    })
                    break;
                case "Old first":
                    newArray = productArray.sort((a, b) => {
                        const dateA = new Date(a.added)
                        const dateB = new Date(b.added)
                        return Number(dateA) - Number(dateB)
                    })
                    break;
            }
            return newArray
        }else{
            const newArray = products.sort((a, b) => {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if(nameA < nameB){
                    return -1
                }
                if(nameA > nameB){
                    return 1
                }

                return 0
            })
            return newArray
        }
    }

    return{
        products,
        filterProduct,
        sortProducts
    }
}