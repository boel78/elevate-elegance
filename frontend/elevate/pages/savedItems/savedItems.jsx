import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { SAVEDITEMS } from "../../savedItems";
import { PRODUCTS } from "../../products";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import { useNavigate } from "react-router-dom";

export const SavedItems = () => {
  const { currentUser, noMenus } = useContext(MenuContext);
  const [likedProducts, setLikedProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser != null){

      const savedItems = SAVEDITEMS.filter(
        (likedProduct) => currentUser.id === likedProduct.u_id
      );
      console.log(savedItems);
      const savedProductIds = savedItems.flatMap((item) => item.p_id);
      const likedProductsByUser = PRODUCTS.filter((product) =>
        savedProductIds.includes(product.id)
      );
      setLikedProducts(likedProductsByUser);
    }
  }, [currentUser]);

  useEffect(() => {
    noMenus();
    console.log(currentUser);
  }, []);

  const visitCataloge = () => {
    navigate("/cataloge");
  };

  return (
    <Layout>
      {currentUser != null ? (
        <div className="pt-20 flex flex-col">
          {likedProducts.length > 0 ? (
            likedProducts.map((likedProduct) => (
              <div key={likedProduct.id}>
                <img src={likedProduct.image}></img>
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
