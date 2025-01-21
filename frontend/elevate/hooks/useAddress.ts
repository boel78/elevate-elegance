import axios from "axios";
import React, { useContext, useState } from "react";
import { MenuContext } from "../src/menuContext";
import { toast } from "react-hot-toast";
import { useUser } from "./useUser";

function initializeAddress(addressIDs) {
  return axios.get("https://elevate-elegance.onrender.com/api/address/getAll", {
    params: { addresses: addressIDs.join(",") },
  });
}

export function useAddress() {
  const { currentUser } = useContext(MenuContext);

  const fetchAddresses = async () => {
    if (currentUser && currentUser.addresses) {
      try {
        const response = await initializeAddress(currentUser.addresses);
        const addresses = response.data;
        console.log(addresses);
        return addresses;
      } catch (error) {
        console.error("Failed to fetch addresses:", error);
        return [];
      }
    }
  };

  const updateAddresses = async (newAddress) => {
    if (!currentUser) {
      console.log("No current user found");
      return;
    }
    currentUser.addresses.push(newAddress);
    try {
      await axios.put("https://elevate-elegance.onrender.com/api/customer", currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllAddresses = async () => {
    try {
      const response = await axios.get("https://elevate-elegance.onrender.com/api/address");
      const addresses = response.data;
      return addresses;
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    const newAddress = Object.fromEntries(formData);
    console.log(newAddress);
    
    const addresses = await fetchAddresses();
    addresses.map((address) => {
      if (address.address === newAddress.address) {
        updateAddresses(newAddress);
        toast.success("Your address have been added!");
        return;
      }
    });
    try {
      const { data } = await axios.post(
        "https://elevate-elegance.onrender.com/api/address",
        newAddress
      );
      if (data.error) {
        console.log(data);

        toast.error(data.error);
      } else {
        toast.success("Your address have been added!");
        addAddressToUser(newAddress)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addAddressToUser = async (address) => {
    
    try{
      const data = await axios.get("https://elevate-elegance.onrender.com/api/address")
      data.data.map((fetchedAddress) => {
        if(address.address === fetchedAddress.address){
          currentUser.addresses.push(fetchedAddress.id)
          console.log(fetchedAddress);     
        }
      })
      
    }
    catch(error){
      console.log(error);
      
    }

    try {
      await axios.put(`https://elevate-elegance.onrender.com/api/customer`, currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchAddresses,
    fetchAllAddresses,
    addAddress,
  };
}
