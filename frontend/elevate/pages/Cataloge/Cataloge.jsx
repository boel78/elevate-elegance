import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import Axios from "axios";
import { PRODUCTS } from "../../products";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowDown } from "@phosphor-icons/react";
import { Layout } from "../../components/layout";

export const Cataloge = () => {
  const { Category } = useParams();

  const { noMenus, setFocusingHomepageObject, focusingHomepageObject, setFocusedObject } = useContext(MenuContext);
  const [products, setProducts] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("none")
  const [showFilters, setShowFilters] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    /*Axios.get("http://localhost:8080/api/product").then((res) => {
            setProducts(res.data)
        })*/
    if (typeof Category === "undefined") {
      setProducts(PRODUCTS);
    } else {
      const newProducts = PRODUCTS.filter(
        (product) => product.category === Category
      );
      setProducts(newProducts);
    }
    console.log(Category);
  }, [Category]);

  useEffect(() => {
    noMenus()
  },[])


  const handleSetShowCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleSetCategory = (category) => {
    Category == category ?
    navigate(`/cataloge/`)
    :
    navigate(`/cataloge/${category}`)
    setShowCategory(false)
  }

  const handleFocusObject = (element) => {
    setFocusingHomepageObject(!focusingHomepageObject);
    setFocusedObject(element);
  };

  const handleSetShowFilters = () =>{
    if(showFilters === false){
      handleFilter("none")
    }
    setShowFilters(!showFilters)
  }

  const handleSetFilterProducts = (genre) => {
    const filteredProducts = products.filter((product) => (product[currentFilter] === genre)
    )
    setProducts(filteredProducts)
  }

  const handleFilter = (f) => {
    console.log("filter " + f)
    setCurrentFilter(f)
  }

  return (
    <Layout>
    <div className="flex flex-col gap-20">
      <div className="flex justify-end">
        <div className="flex pt-20 flex-col relative">
          {/* SIDOMENY */}
            <div className="flex"> 
              <span
                onClick={handleSetShowCategory}
                className="flex items-center justify-center"
              >
                <p>Category</p>
                <ArrowDown size="15" />
              </span>
            <span className="flex items-center justify-center" onClick={handleSetShowFilters}>
              <p>Filters</p>
              <ArrowDown size="15" />
            </span>
            <span className="flex items-center justify-center">
              <p>Sort by</p>
              <ArrowDown size="15" />
            </span>
            </div>
            { 
            /* SHOW CATEGORY CODE */
            showCategory &&
            <ul className='absolute top-full left-0 mt-2 z-10 bg-slate-100'>
                <li onClick={() => handleSetCategory("Clothing")}>
                  Clothing
                </li>
                <li onClick={() => handleSetCategory("Jewellery")}>
                  Jewellery
                </li>
                <li onClick={() => handleSetCategory("Bags")}>
                  Bags
                </li>
                <li onClick={() => handleSetCategory("Shoes")}>
                  Shoes
                </li>
            </ul>         
}
            {
            //FILTER CODE
            showFilters && (
            <ul className='absolute top-full left-20 mt-2 z-10 bg-slate-100'>
                {currentFilter !== "none" ? (
                  <>
                  {currentFilter === "material" && ( <ul >
                    <li onClick={() => handleSetFilterProducts("leather")}>
                    Leather
                    </li>
                    </ul>
                  )}
                    {currentFilter === "fitting" && 
                    (<ul>
                <li onClick={() => handleSetFilterProducts("baggy")}>
                  Baggy
                </li>
                  </ul>)}
                </>
                    ):    
                
            (
              //SHOW FILTER OPTIONS
              showFilters && <ul>
              <li onClick={() => handleFilter("material")}>
              Material
              </li>
              <li onClick={() => handleFilter("fitting")}>
              Fitting
              </li>
            </ul>)
}
            </ul>
            )}
        </div>
      </div>
      <div className="flex gap-12">
        {products.map(
          (element) =>
            element.isTopSeller ? (
              <img
                src={element.image}
                key={element.id}
                className="rounded-lg max-w-64"
                onClick={() => handleFocusObject(element)}
              />
        ): null
        )}
      </div>
    </div>

  </Layout>
  );
};
