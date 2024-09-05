import React, { useContext, useEffect, useState } from "react";
import { ORDERS } from "../../orders";
import { MenuContext } from "../../src/menuContext";
import { PRODUCTS } from "../../products";

export const MyOrders = () => {
  const { currentUser } = useContext(MenuContext);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const orders = ORDERS.filter((order) => currentUser.id == order.u_id);
    setUserOrders(orders);
  }, [currentUser]);

  return (
    <div>
      <div>
        {userOrders.map((order) => (
          <div
            className="flex pt-20 justify-between border-solid border-2 border-black ml-40 mr-40"
            key={order.id}
          >
            <div className="flex gap-4">
              {order.p_id.map((productID) => {
                const product = PRODUCTS.find((prod) => prod.id === productID);
                return (
                  product && (
                    <div key={product.id}>
                      <img src={product.image} className="max-w-20" />
                    </div>
                  )
                );
              })}
            </div>
            <div className="flex flex-col">
              <button className="bg-slate-600">Track order</button>
              <button>View Order Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
