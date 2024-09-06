import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MenuContext } from "../src/menuContext";
import { TanButton } from "./button";

export const HomePageProduct = (props) => {
  const [img, setImg] = useState();
  const { cart, setCart, setFocusingHomepageObject } = useContext(MenuContext);

  useEffect(() => {
    setImg(props.data.image);
  }, [props.data]);

  const addToCart = () => {
    const product = props;
    setCart([...cart, product]);
  };

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
          <h2 className="font-medium text-3xl ">{props.data.name}</h2>
          <div className="flex flex-col items-center gap-10">
            <p className="text-lg">{props.data.description}</p>
            <p className="text-lg">{props.data.price} SEK</p>
            <div className="flex flex-col items-center gap-10">
              <Link
                to={`/product/${props.data.id}`}
                onClick={() => setFocusingHomepageObject(false)}
              >
                <TanButton btnText={"To Product"}></TanButton>
              </Link>
              <span onClick={addToCart}>
                <TanButton btnText={"Add to Cart"}></TanButton>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
