import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { BlueButton } from "../../components/blueButton";
import { CartObject } from "../../components/cartObject";

export const FinalCheckout = () => {
  const { currentUser, cart, filledOutOrderDetails } = useContext(MenuContext);
    const [userInfo, setUserInfo] = useState()
    const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const keysToPutIn = ["firstname", "lastname", "zipcode", "address", "town", "phone"]
    if(currentUser){
        const filteredInfo = Object.keys(currentUser).filter(key => keysToPutIn.includes(key)).reduce((obj, key) => {
            obj[key] = currentUser[key]
            return obj
        },{})
        setUserInfo(filteredInfo)
    }
    calculateTotal()
    
  }, []);

  useEffect(() => {
    calculateTotal()
  },[cart])

  const calculateTotal = () => {
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
  }

  return (
    <>
      <div className="pt-20 flex justify-between px-20 pb-20">
        <div className="flex flex-col gap-5">
          { cart && cart.map((object, index) => (
            <div
              key={index}
              className="border-solid border-2 border-darkBlue"
            >
                <CartObject obj={object} />
            </div>
          ))}
          <p>Total cost: {totalCost}</p>
        </div>
        <div className="bg-lightTan p-5 rounded-md shadow-md flex flex-col gap-6 ">
            <div className="flex flex-col gap-3">
              {(currentUser !== null) ?
                userInfo &&
                  (Object.entries(userInfo).map(
                    ([key, value], index) => (
                      <p key={index}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                      </p>
                    )
                  ))

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
