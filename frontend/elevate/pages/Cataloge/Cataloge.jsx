import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { MenuContext } from "../../src/menuContext";
import Axios from "axios";
import { HomePageProduct } from "../../components/homePageProduct";
import { Sidemenu } from "../../components/sidemenu";
import { PRODUCTS } from "../../products";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowDown } from "@phosphor-icons/react";

export const Cataloge = () => {
  const { Category } = useParams();

  const { sideMenuActive, noMenus } = useContext(MenuContext);
  const [products, setProducts] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

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

  return (
    <>
      <Navbar />
      <div className="bg-lightTan flex flex-col gap-20">
        <div className="flex justify-end">
          <div className="flex pt-20 flex-col relative">
              <div className="flex"> 
                <span
                  onClick={handleSetShowCategory}
                  className="flex items-center justify-center"
                >
                  <p>Category</p>
                  <ArrowDown size="15" />
                </span>
              <span className="flex items-center justify-center">
                <p>Filters</p>
                <ArrowDown size="15" />
              </span>
              <span className="flex items-center justify-center">
                <p>Sort by</p>
                <ArrowDown size="15" />
              </span>
              </div>
              { showCategory &&
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
          </div>

        </div>
        <div>
          {products.map((element) => (
            <HomePageProduct key={element.id} data={element} />
          ))}
        </div>
      </div>
      <Footer />
      {sideMenuActive && <Sidemenu />}
    </>
  );
};
