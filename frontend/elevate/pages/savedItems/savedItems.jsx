import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { SAVEDITEMS } from "../../savedItems";
import { PRODUCTS } from "../../products";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const SavedItems = () => {
  const { currentUser, noMenus, focusingHomepageObject,
    setFocusedObject,
    setFocusingHomepageObject } = useContext(MenuContext);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState()


  const {getMultipleProducts} = useProducts()

  const navigate = useNavigate();

  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoad(false);
    }, 150);
  }, []);
  
  useEffect(() => {
    if (!isInitialLoad) {
      const items = getMultipleProducts(currentUser.likedProducts);
      setLikedProducts(items)
    }
  }, [isInitialLoad]);
  

  useEffect(() => {
    noMenus();
    /*const items = getMultipleProducts(currentUser.likedProducts);
      console.log(items)
      setLikedProducts(items)*/
    
  }, []);
  useEffect(() => {
    /*noMenus();
    const items = getMultipleProducts(currentUser.likedProducts);
      console.log(items)
      setLikedProducts(items)*/
    
  }, [currentUser]);

  const visitCataloge = () => {
    navigate("/cataloge");
  };

  return (
    <Layout>
      {currentUser != null ? (
        <div className="pt-20 flex flex-col">
          {likedProducts.length > 0 ? (
            likedProducts.map((likedProduct) => (
              <div key={likedProduct.id} className=" w-1/2 sm:w-1/4">
                <img src={`data:image/jpeg;base64,${likedProduct.image}`}
                    onClick={() => handleFocusObject(likedProduct)}></img>
              </div>
            ))
          ) : (
            <div className="self-center flex flex-col justify-center pt-60 gap-8">
              <p>
                You have no saved products yet. Visit our products to place an
                order now
              </p>
              <TanButton btnText={"Products"} onClick={visitCataloge} />
            </div>
          )}
        </div>
      ) : (
        <div className="pt-20">
          <p>Please Login</p>
        </div>
      )}
    </Layout>
  );
};
