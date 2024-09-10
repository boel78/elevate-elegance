import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../src/menuContext";
import { TanButton } from "./button";
import { ArrowDown } from "@phosphor-icons/react";

export const Cart = () => {
  const { cart, setCart } = useContext(MenuContext);
  const [totalCost, setTotalCost] = useState(0);
  const [sizeBarOpen, setSizeBarOpen] = useState(false);

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
    setTotalCost(total);
  }, [cart]);

  const handleSizeBarToggle = () => {
    setSizeBarOpen(!sizeBarOpen);
  };

  const handleSetSize = (item, s) => {
    const updatedCart = cart.map((p) => {
      if (p.product.id === item.product.id) {
        return { ...p, size: s };
      }
      return p;
    });
    setCart(updatedCart);
    setSizeBarOpen(false);
  };

  const handleChangeQuantity = (val, item) => {
   if(Number(val) === 0 ){
    const updatedCart = cart.filter((product) => !(product.id === item.id))
    setCart(updatedCart)
   }
   else{
    const updatedCart = cart.map((product) => {
      if (product.id === item.id) {
          let index = updatedCart.indexOf(product);
          updatedCart.splice(index, 1);
          return { ...product, quantity: val };
        
      }
      return product;
    });
    
    setCart(updatedCart);
  }
    console.log(cart)
  };

  return (
    <div className="flex flex-col fixed right-0 top-12 w-1/3 bg-white border-l-2 border-b-2 border-black font-inter max-h-[400px] overflow-y-scroll gap-4">
      <div className="flex content-center self-center">
        <h2 className="font-medium text-2xl">Added to shopping cart</h2>
      </div>
      <div className="flex-col flex gap-2">
        {cart.map((item) => (
          <div key={item.product.id + item.size} className="flex gap-12">
            <img src={item.product.image} className="w-36 rounded-xl" />
            <div>
              <h3 className="font-medium text-xl">{item.product.name}</h3>
              <p>{item.product.price} SEK</p>
              <div className="flex">
                <p>Size: {!sizeBarOpen && item.size}</p>
                {item.product.size.length === 1 ? (
                  <p>One size</p>
                ) : sizeBarOpen ? (
                  <ul className="pl-2">
                    {item.product.size.map((s, index) => (
                      <p key={index} onClick={() => handleSetSize(item, s)}>
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
              <span className="flex gap-2">
                <p>Quantity:</p>
                <input
                  type="number"
                  value={item.quantity}
                  className="w-8"
                  onChange={(e) => handleChangeQuantity(e.target.value, item)}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>Total Cost: {totalCost}</p>
      </div>

      <div className="w-1/2 self-center flex flex-col gap-4">
        <TanButton btnText={"Checkout"} />
        <TanButton btnText={"View shopping cart"} />
      </div>
    </div>
  );
};
