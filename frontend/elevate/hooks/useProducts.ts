import { useCallback, useContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import axios from "axios";
import { MenuContext } from "../src/menuContext";
import { useUser } from "./useUser";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const {currentUser, setCurrentUser} = useContext(MenuContext);
  const {handleSave} = useUser();

  const initializeProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/product");

      const sortedProducts = sortProducts("New first", data, "dateAdded")
        setProducts(data);
      
    } catch (error) {
      console.log(error);
    }
    
    
  };

  useEffect(() => {
    initializeProducts();
  }, []);

  const filterProduct = useCallback((filterType, filterValue) => {      
    if (filterType === "" && filterValue === "") {
      return products;
    } else {
      
      const filteredArray = products.filter(
        (produkt) => produkt[filterType] === filterValue
      );
      console.log(filteredArray);
      
      return filteredArray.length > 0 ? filteredArray : [];
    }
  }, [products]);

  const sortProducts = (sortOption, productArray, attributeName) => {
    
    if (productArray) {
      let newArray = productArray;
      switch (sortOption) {
        case "A-Z":
          newArray = productArray.sort((a, b) => {
            const nameA = a[attributeName].toUpperCase();
            const nameB = b[attributeName].toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;
          });
          break;
        case "Z-A":
          newArray = productArray.sort((a, b) => {
            const nameA = a[attributeName].toUpperCase();
            const nameB = b[attributeName].toUpperCase();
            if (nameA < nameB) {
              return 1;
            }
            if (nameA > nameB) {
              return -1;
            }

            return 0;
          });
          break;
        case "New first":
          newArray = productArray.sort((a, b) => {
            const dateA = new Date(a.dateAdded);
            const dateB = new Date(b.dateAdded);
            return Number(dateB) - Number(dateA);
          });
          break;
        case "Old first":
          newArray = productArray.sort((a, b) => {
            const dateA = new Date(a.dateAdded);
            const dateB = new Date(b.dateAdded);
            return Number(dateA) - Number(dateB);
          });
          break;
      }
      
      
      return newArray;
    } else {
      const newArray = products.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      return newArray;
    }
  };

  const searchProduct = (searchWord) => {

    if(products.length > 0){
      const lowerCaseSearchWord = searchWord.toLowerCase().trim()
    
    

    const searchResult = products.filter((product) => product.name.toLowerCase().includes(lowerCaseSearchWord))

    return searchResult
    }
    else{
      return []
    }
    
    
    


  }

  const handleLikeProduct = (productId) => {
    const newUserData = {
      ...currentUser,
      likedProducts: [...currentUser.likedProducts],
    };

    if (currentUser.likedProducts.includes(productId)) {
      newUserData.likedProducts = currentUser.likedProducts.filter(
        (product) => product != productId
      );
    } else {
      newUserData.likedProducts.push(productId);
    }
    setCurrentUser(newUserData);
    handleSave(newUserData);
  };

  const getMultipleProducts = (ids) => {    
    const multipleProducts = products.filter((product) => ids.includes(product.id)) 
    console.log(multipleProducts);
    return multipleProducts
  }

  return {
    products,
    filterProduct,
    sortProducts,
    searchProduct,
    getMultipleProducts,
    handleLikeProduct,
  };
}
