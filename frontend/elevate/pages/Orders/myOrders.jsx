import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../src/menuContext";
import { Layout } from "../../components/layout";
import { TanButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export const MyOrders = () => {
  const { currentUser, noMenus } = useContext(MenuContext);
  const [userOrders, setUserOrders] = useState([]);
  const navigate = useNavigate();
  const { getOrders } = useUser();

  useEffect(() => {
    if (currentUser != null) {
      fetchOrders();
    }
  }, [currentUser]);

  const fetchOrders = async () => {
    let orders = await getOrders();
    setUserOrders(orders);
  };

  useEffect(() => {
    noMenus();
  }, []);

  const visitCataloge = () => {
    navigate("/cataloge");
  };

  return (
    <Layout>
      <div>
        <div className="flex flex-col gap-5 pt-16">
          {currentUser != null ? (
            userOrders.length > 0 ? (
              userOrders.map((order) => (
                <div
                  className="flex py-20 items-start border-solid border-2 border-gray-300 sm:mx-40 justify-around shadow-lg"
                  key={order.id}
                >
                  <div className="flex gap-4 w-1/3 flex-wrap">
                    {order.products.length > 2 ? (
                      <div className=" flex relative mr-3">
                        <img src={`data:image/jpeg;base64,${order.products[1].image}`} className="max-w-24 rounded-lg" />
                        <img
                          src={`data:image/jpeg;base64,${order.products[0].image}`}
                          className="max-w-24 rounded-lg left-3 absolute"
                        />
                      </div>
                    ) : (
                      order.products.map((product) => {
                        return (
                          product && (
                            <div key={product.id}>
                              <img
                                src={`data:image/jpeg;base64,${product.image}`}
                                className="max-w-24 rounded-lg"
                              />
                            </div>
                          )
                        );
                      })
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-lg">
                      Total cost: {order.totalPrice} SEK
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <TanButton btnText={"Track order"} />
                    <TanButton btnText={"View Order Details"} />
                  </div>
                </div>
              ))
            ) : (
              <div className="self-center flex flex-col justify-center pt-60 gap-8">
                <p>
                  You have no orders yet. Visit our products to place an order
                  now
                </p>
                <TanButton btnText={"Products"} onClick={visitCataloge} />
              </div>
            )
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
