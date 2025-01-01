import React, { useContext } from "react";
import { MenuContext } from "../src/menuContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAddress } from "./useAddress";

export function useUser() {
  const { currentUser, setCurrentUser } = useContext(MenuContext);
  const { fetchAllAddresses } = useAddress();

  const handleSave = async (userInfo) => {
    const newUser = userInfo;
    newUser.id = currentUser.id;

    try {
      const { data } = await axios.put(
        "http://localhost:8080/api/customer",
        newUser
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Your details have now been updated");

        setCurrentUser(newUser);
        checkAddresses();
      }
    } catch (error) {
      toast.error(error.response?.data || "ajaja");
    }
  };

  const checkAddresses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/customer");
      const users = response.data;
      const allAddresses = await fetchAllAddresses();

      let addressArray = Array.from(
        new Set(users.flatMap((customer) => customer.addresses))
      );

      const addressesToDelete = allAddresses
        .filter((address) => !addressArray.includes(address.id))
        .map((address) => address.id);

      await axios.delete(`http://localhost:8080/api/address/multiple`, {
        params: { addresses: addressesToDelete.join(",") },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const makePurchase = async (currentUser, productIds, price) => {
    const newOrder = {
      customerId: currentUser,
      productsId: productIds,
      totalPrice: price,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/order",
        newOrder
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Your Order have now been made");
      }
    } catch (error) {
      toast.error(error.response?.data || "ajaja");
    }
  };

  const getOrders = async () => {
    const userId = currentUser.id;
    let orders = [];
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/order/user/${userId}`
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        orders = await Promise.all(
          data.map(async (order) => {

            const productDetails = order.productsId.map((product) =>
              
              axios.get(`http://localhost:8080/api/product/id/${product}`)
            );

            const productResponses = await Promise.all(productDetails);

            order.products = productResponses.map((response) => response.data);

            return order;
          })
        );
      }
    } catch (error) {
      toast.error(error.response?.data || "ajaja");
    }    
    return orders;
  };

  return {
    handleSave,
    makePurchase,
    getOrders,
  };
}
