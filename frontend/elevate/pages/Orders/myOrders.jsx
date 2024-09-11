import React, { useContext, useEffect, useState } from "react";
import { ORDERS } from "../../orders";
import { MenuContext } from "../../src/menuContext";
import { PRODUCTS } from "../../products";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";

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
    <Layout>
      <div>
        <div className="flex flex-col gap-5 pt-16">
          {currentUser != null ? (
            userOrders.map((order) => (
              <div
                className="flex py-20 items-start border-solid border-2 border-gray-300 ml-40 mr-40 justify-around shadow-lg"
                key={order.id}
              >
                <div className="flex gap-4 w-1/3">
                  {order.p_id.map((productID) => {
                    const product = PRODUCTS.find(
                      (prod) => prod.id === productID
                    );
                    return (
                      product && (
                        <div key={product.id}>
                          <img src={product.image} className="max-w-24 rounded-lg" />
                        </div>
                      )
                    );
                  })}
                </div>
                <div>
                  <p className="font-medium text-lg">Arriving: {order.eta}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <TanButton btnText={"Track order"}/>
                  <TanButton btnText={"View Order Details"}/>
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
    </Layout>
  );
};
