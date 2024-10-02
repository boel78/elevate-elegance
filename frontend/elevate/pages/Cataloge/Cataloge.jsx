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

  const {products, filterProduct, searchProduct} = useProducts()
  const [shownProducts, setShownProducts] = useState([])
  const [forceRender, setForceRender] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({})

  const {Category} = useParams()

  const {sortProducts} = useProducts()
  


  useEffect(() => {
    noMenus();
    const filteredProducts = filterProduct("category", Category)
    setShownProducts(filteredProducts)
      
  }, []);

  useEffect(() => {
    setShownProducts(filterProduct("category", currentCategory))
    
    
  },[currentCategory])


  useEffect(() => {
    setShownProducts(products)
  },[products])

  useEffect(() => {
    
  },[shownProducts])

  useEffect(() => {
    noMenus();
    console.log("category");
    
    console.log(Category);
    

    // Kör sökning eller filtrering baserat på URL-parametern när komponenten laddas
    if (products.length > 0 && Category) {
      if (Category.includes("search")) {
        const searchQuery = Category.substring(6); // Extrahera sökordet
        const searchedProducts = searchProduct(searchQuery); // Hämta sökresultaten
        setShownProducts(searchedProducts); // Uppdatera visade produkter
        console.log("Searched products:", searchedProducts);
      } 
      else {
        const filteredProducts = filterProduct("category", Category); // Filtrera baserat på kategori
        setShownProducts(filteredProducts); // Uppdatera visade produkter
        console.log("Filtered products by category:", filteredProducts);
      }
    }
  }, [products, Category]);



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
                className="rounded-lg max-w-64 shadow-md"
                onClick={() => handleFocusObject(element)}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
