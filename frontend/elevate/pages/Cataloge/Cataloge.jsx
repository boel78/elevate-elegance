import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import Axios from "axios";
import { Layout } from "../../components/layout";
import { FilterBox } from "../../components/filterBox";
import { useProducts } from "../../hooks/useProducts";


export const FilterContext = createContext(null)


export const Cataloge = () => {

  const {
    noMenus,
    setFocusingHomepageObject,
    focusingHomepageObject,
    setFocusedObject,
  } = useContext(MenuContext);

  const {products, filterProduct} = useProducts()
  const [shownProducts, setShownProducts] = useState(products)


  useEffect(() => {
    noMenus();
    console.log(products)
    setShownProducts(products)
  }, []);



  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  const contextValue = {
    setShownProducts,
    shownProducts
  }

  

  return (
    <Layout>
      <div className="flex flex-col gap-20">
        <div className="flex justify-end">
        <FilterContext.Provider value={contextValue}>
          <FilterBox/>
          </FilterContext.Provider>
        </div>
        <div className="flex gap-12">
          {shownProducts.map((element) =>
            (
              <img
                src={element.image}
                key={element.id}
                className="rounded-lg max-w-64"
                onClick={() => handleFocusObject(element)}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
