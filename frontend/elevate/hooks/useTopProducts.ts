import { useState } from "react";
import { PRODUCTS } from "../products";

function initializeTopProducts(){
    const productArray = PRODUCTS.filter((product) => product.isTopSeller === true)

    return productArray
}

export function useTopProducts(){
    const [topProducts, setTopProducts] = useState(initializeTopProducts);

    return{
        topProducts
    }
}