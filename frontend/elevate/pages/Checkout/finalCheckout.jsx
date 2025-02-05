import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { BlueButton } from "../../components/blueButton";
import { CartObject } from "../../components/cartObject";
import { useAddress } from "../../hooks/useAddress";
import { useUser } from "../../hooks/useUser";

export const FinalCheckout = () => {
  const { currentUser, cart, filledOutOrderDetails} = useContext(MenuContext);
  const [userInfo, setUserInfo] = useState();
  const [totalCost, setTotalCost] = useState(0);
  const [addressObjects, setAddressObjects] = useState([]);

  const { fetchAddresses } = useAddress();

  const {makePurchase} = useUser()

  useEffect(() => {
    const keysToPutIn = [
      "firstName",
      "lastName",
      "zipcode",
      "address",
      "town",
      "phone",
    ];

    if (currentUser) {
      fetchAddresses().then((addresses) => {
        const addressArray = Array.isArray(addresses)
          ? addresses
          : Object.values(addresses);
        setAddressObjects(addressArray);
      });
      const filteredInfo = Object.keys(currentUser)
        .filter((key) => keysToPutIn.includes(key))
        .reduce((obj, key) => {
          obj[key] = currentUser[key];
          return obj;
        }, {});
      setUserInfo(filteredInfo);
    }
    calculateTotal();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

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
  };

  const handlePurchase = () => {    
    let productIds = cart.map(product => product.product.id);
    makePurchase(currentUser.id, productIds, totalCost)
  }

  return (
    <>
      <div className="pt-20 flex flex-col sm:flex-row justify-between sm:px-20 pb-20">
        <div className="flex flex-col gap-5">
          {cart &&
            cart.map((object, index) => (
              <div
                key={index}
                className="border-solid border-2 rounded-l-2xl border-gray-200 pr-4 shadow-lg"
              >
                <CartObject obj={object} />
              </div>
            ))}
          <p>Total cost: {totalCost} SEK</p>
        </div>
        <div className="bg-lightTan p-5 rounded-md shadow-md flex flex-col gap-6 ">
          <div className="flex flex-col gap-3">
            {currentUser !== null ? (
              userInfo ? (
                <>
                  {Object.entries(userInfo).map(([key, value], index) => (
                    <p key={index}>
                      {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                      : {value}
                    </p>
                  ))}
                  {addressObjects.map((address, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        {Object.entries(address)
                        .filter(([key]) => key !== "id") 
                        .map(([key, value]) => (
                          <p key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                            {value}
                          </p>
                        ))}
                      </div>
                  ))}
                </>
              ) : null
            ) : (
              Object.entries(filledOutOrderDetails).map(
                ([key, value], index) => (
                  <p key={index}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </p>
                )
              )
            )}
          </div>
          <BlueButton btnText={"Confirm order"} onClick={() => handlePurchase()}/>
        </div>
      </div>
    </>
  );
};
