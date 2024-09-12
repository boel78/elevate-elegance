import React, { useContext, useEffect } from "react";
import { MenuContext } from "../../src/menuContext";
import { BlueButton } from "../../components/blueButton";

export const FinalCheckout = () => {
  const { currentUser, cart, filledOutOrderDetails } = useContext(MenuContext);

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <>
      <div className="pt-20 flex justify-between px-20 pb-20">
        <div className="flex flex-col gap-5">
          {cart.map((object, index) => (
            <div
              key={index}
              className="flex border-2 border-darkBlue rounded-lg shadow-md"
            >
              <img src={object.product.image} className="w-36 rounded-l-md" />
              <div className="px-8">
                <h3 className="font-medium text-xl">{object.product.name}</h3>
                <p>Size: {object.size ? object.size : "One size"}</p>
                <p>Quantity: {object.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-lightTan p-5 rounded-md shadow-md flex flex-col gap-6 ">
            <div className="flex flex-col gap-3">
              {currentUser !== null
                ? currentUser.map((info, index) => <p key={index}>{info}</p>)
                : Object.entries(filledOutOrderDetails).map(
                    ([key, value], index) => (
                      <p key={index}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                      </p>
                    )
                  )}
            </div>
            <BlueButton btnText={"Confirm order"} />

        </div>
      </div>
    </>
  );
};
