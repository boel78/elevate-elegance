import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MenuContext } from "../src/menuContext";
import { TanButton } from "./button";
import { ArrowDown, Heart } from "@phosphor-icons/react";
import { useUser } from "../hooks/useUser";
import { useProducts } from "../hooks/useProducts";

export const HomePageProduct = (props) => {
  const [img, setImg] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeBarOpen, setSizeBarOpen] = useState(false);
  const {
    cart,
    setCart,
    setFocusingHomepageObject,
    currentUser,
  } = useContext(MenuContext);
  const product = props.data;

  const {handleLikeProduct} = useProducts();

  useEffect(() => {
    setImg(`data:image/jpeg;base64,${product.image}`);
  }, [product]);

  const addToCart = (p) => {
    let foundMatchingProduct = false;

    const tempCart = [...cart];

    tempCart.forEach((produkt) => {
      if (produkt.product.id === p.id && produkt.size === selectedSize) {
        produkt.quantity++;
        foundMatchingProduct = true;
      }
    });
    if (!foundMatchingProduct) {
      console.log(cart.length);
      tempCart.push({
        id: cart.length,
        product: p,
        size: selectedSize,
        quantity: 1,
      });
    }

    setCart(tempCart);
  };

  const handleSetSize = (s) => {
    setSizeBarOpen(false);
    setSelectedSize(s);
  };



  const handleSizeBarToggle = () => {
    setSizeBarOpen(!sizeBarOpen);
  };

  return (
    <div
      className="w-screen h-auto flex fixed z-50 inset-0 items-center justify-center bg-white bg-opacity-55"
      onClick={() => setFocusingHomepageObject(false)}
    >
      <div
        className="rounded-xl flex h-2/3 border-gray-400 border-solid border-2 bg-superLightTan"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img} className="sm:rounded-l-lg sm:w-full sm:h-full w-1/2 h-1/2 self-center sm:self-start" />
        <div className="flex flex-col gap-2 sm:gap-12 sm:mx-24 w-56">
          <span className="flex items-center justify-between pl-9">
            <h2 className="font-medium text-3xl sm:text-center flex-1 pt-2">
              {product.name}
            </h2>
            {currentUser && <Heart
              size={35}
              onClick={() => handleLikeProduct(product.id)}
              weight={
                currentUser.likedProducts.includes(product.id) ? "fill" : "thin"
              }
              color={
                currentUser.likedProducts.includes(product.id)
                  ? "#be3c3c"
                  : "#000"
              }
            />}
          </span>
          <div className="flex flex-col items-center gap-2 sm:gap-2 pb-10 sm:ml-0 ml-4 sm:text-lg text-sm">
            <p>{product.description}</p>
            <p>{product.price} SEK</p>
            <p>{product.added}</p>
            <div className="flex gap-5">
              <p>Size: {selectedSize && !sizeBarOpen && selectedSize}</p>
              {product.size.length === 1 ? (
                <p>One size</p>
              ) : sizeBarOpen ? (
                <ul>
                  {product.size.map((s, index) => (
                    <p key={index} onClick={() => handleSetSize(s)}>
                      {s}
                    </p>
                  ))}
                </ul>
              ) : (
                <ArrowDown
                  onClick={handleSizeBarToggle}
                  className="self-center"
                />
              )}
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-5">
              <Link
                to={`/Product/${product.id}`}
                state= {{theproduct: product}}
                onClick={() => setFocusingHomepageObject(false)}
              >
                <TanButton btnText={"To Product"}></TanButton>
              </Link>
              <span onClick={() => addToCart(product)}>
                <TanButton btnText={"Add to Cart"}></TanButton>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
