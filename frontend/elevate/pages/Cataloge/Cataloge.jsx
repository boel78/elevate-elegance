import { createContext, useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { Layout } from "../../components/layout";
import { FilterBox } from "../../components/filterBox";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";


export const FilterContext = createContext(null)


export const Cataloge = () => {

  const {
    noMenus,
    setFocusingHomepageObject,
    focusingHomepageObject,
    setFocusedObject,
  } = useContext(MenuContext);

  const {products, filterProduct} = useProducts()
  const [shownProducts, setShownProducts] = useState([])
  const [forceRender, setForceRender] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({})

  const {Category} = useParams()
  


  useEffect(() => {
    noMenus();
    const filteredProducts = filterProduct("category", Category)
    setShownProducts(filteredProducts)
    console.log(Category);
    
  }, []);

  useEffect(() => {
    setShownProducts(filterProduct("category", currentCategory))
    
    
  },[currentCategory])


  useEffect(() => {
    setShownProducts(products)
  },[products])

  useEffect(() => {
    
  },[shownProducts])



  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };



  const contextValue = {
    setShownProducts,
    shownProducts,
    setForceRender,
    forceRender,
    setCurrentCategory
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
                src={`data:image/jpeg;base64,${element.image}`}
                key={element.id}
                className="rounded-lg max-w-64 shadow-sm"
                onClick={() => handleFocusObject(element)}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
