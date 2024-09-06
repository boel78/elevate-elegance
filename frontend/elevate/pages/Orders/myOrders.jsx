import React, { useContext, useEffect, useState } from "react";
import { ORDERS } from "../../orders";
import { MenuContext } from "../../src/menuContext";
import { PRODUCTS } from "../../products";

export const MyOrders = () => {
  const { currentUser, noMenus } = useContext(MenuContext);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (currentUser != null) {
      const orders = ORDERS.filter((order) => currentUser.id == order.u_id);
      setUserOrders(orders);
    }
  }, [currentUser]);

  useEffect(() => {
    noMenus();
  }, []);

  return (
    <div>
      <div>
        {currentUser != null ? (
          userOrders.map((order) => (
            <div
              className="flex pt-20 justify-between border-solid border-2 border-black ml-40 mr-40"
              key={order.id}
            >
              <div className="flex gap-4">
                {order.p_id.map((productID) => {
                  const product = PRODUCTS.find(
                    (prod) => prod.id === productID
                  );
                  return (
                    product && (
                      <div key={product.id}>
                        <img src={product.image} className="max-w-20" />
                      </div>
                    )
                  );
                })}
                <p>Arriving: {order.eta}</p>
              </div>
              <div className="flex flex-col">
                <button className="bg-slate-600">Track order</button>
                <button>View Order Details</button>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <h2 className="pt-20">Please login</h2>
          </div>
        )}
      </div>
    </div>
  );
};
