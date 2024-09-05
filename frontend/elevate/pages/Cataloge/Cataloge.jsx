import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { MenuContext } from "../../src/menuContext";
import Axios from "axios";
import { HomePageProduct } from "../../components/homePageProduct";
import { Sidemenu } from "../../components/sidemenu";
import { PRODUCTS } from "../../products";
import { useParams } from "react-router-dom";

export const Cataloge = () => {
  const { Category } = useParams();

  const { filteredProducts, sideMenuActive} =
    useContext(MenuContext);
  const [products, setProducts] = useState([]);

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
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-lightTan flex flex-col gap-20">
        <div className="flex justify-end">
          <div className="flex pt-20">
            <p>Category</p>
            <p>Filters</p>
            <p>Sort by</p>
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
