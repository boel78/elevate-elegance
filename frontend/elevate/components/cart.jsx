import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../src/menuContext";
import { TanButton } from "./button";
import { Link } from "react-router-dom";
import { CartObject } from "./cartObject";

export const Cart = () => {
  const { cart, currentUser } = useContext(MenuContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.map((prodcut) => {
      if (prodcut.quantity > 1) {
        let sum = prodcut.product.price * prodcut.quantity;
        total += sum;
      } else {
        total += prodcut.product.price;
      }
    });
    setTotalCost(Number(total).toFixed(1));
  }, [cart]);


  return (
    <div className="flex flex-col fixed right-0 top-12 w-2/3 sm:w-1/4 pt-14 sm:h-2/3 h-1/2 bg-white border-l-2 border-b-2 border-black font-inter overflow-y-scroll gap-4">
      <div className="flex content-center self-center">
        <h2 className="font-medium text-2xl">Added to shopping cart</h2>
      </div>
      <div className="flex-col flex gap-2">
        {cart.map((item) => (
          <div key={item.id} className="pl-4 border-2 border-y-gray shadow-md ">
            <CartObject obj={item} />
          </div>
        ))}
      </div>
      <div className="pl-4 text-lg">
        <p>Total Cost: {totalCost} SEK</p>
      </div>

      <div className="w-1/2 self-center flex flex-col gap-4 items-center">
        <Link to={currentUser === null ? "/guestCheckout" : "/checkout"}><TanButton btnText={"Checkout"}/></Link>
        <TanButton btnText={"View shopping cart"} />
      </div>
    </div>
  );
};
