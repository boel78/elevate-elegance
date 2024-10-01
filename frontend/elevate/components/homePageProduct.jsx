import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MenuContext } from "../src/menuContext";
import { TanButton } from "./button";
import { ArrowDown } from "@phosphor-icons/react";

export const HomePageProduct = (props) => {
  const [img, setImg] = useState();
  const [selectedSize, setSelectedSize] = useState("")
  const [sizeBarOpen, setSizeBarOpen] = useState(false)
  const { cart, setCart, setFocusingHomepageObject } = useContext(MenuContext);
  const product = props.data

  useEffect(() => {
    setImg(`data:image/jpeg;base64,${product.image}`);
  }, [product]);

  const addToCart = (p) => {
    let foundMatchingProduct = false

    const tempCart = [...cart];

      tempCart.forEach((produkt) => {
        if (produkt.product.id === p.id && produkt.size === selectedSize) {
            produkt.quantity++
            foundMatchingProduct = true
          }
        
      })
      if (!foundMatchingProduct) {
        console.log(cart.length)
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
    setSizeBarOpen(false)
    setSelectedSize(s)
  }

  const handleSizeBarToggle = () => {
    setSizeBarOpen(!sizeBarOpen)
  }

  return (
    <div
      className="w-full h-auto flex fixed z-50 inset-0 items-center justify-center bg-white bg-opacity-55"
      onClick={() => setFocusingHomepageObject(false)}
    >
      <div
        className="rounded-xl flex border-black border-solid border-2 bg-superLightTan"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img} className="rounded-l-lg" />
        <div className="flex flex-col gap-12 mx-24 w-56">
          <h2 className="font-medium text-3xl ">{product.name}</h2>
          <div className="flex flex-col items-center gap-10">
            <p className="text-lg">{product.description}</p>
            <p className="text-lg">{product.price} SEK</p>
            <p className="text-lg">{product.added}</p>
            <div className="flex gap-5">
                    <p>Size: {(selectedSize && !sizeBarOpen) && selectedSize}</p>
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
            <div className="flex flex-col items-center gap-10">
              <Link
                to={`/product/${product.id}`}
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
