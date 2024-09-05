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
        <div>
          <div className="pt-20">
            {userOrders.map((order) => (
                order.p_id.map((productID) => {
                  const product = PRODUCTS.find(
                    (prod) => prod.id === productID
                  );
                  return (
                    product && (
                      <div key={product.id}>
                        <img src={product.image} />
                      </div>
                    )
                  );
                })
            ))}
          </div>
        </div>
        <div>
          <button>Track order</button>
          <button>View Order Details</button>
        </div>
      </div>
    </div>
  );
};
