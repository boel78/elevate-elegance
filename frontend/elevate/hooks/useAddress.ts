import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MenuContext } from '../src/menuContext'




function initializeAddress(addressIDs){
    return axios.get("http://localhost:8080/api/address/getAll", {
        params: { addresses: addressIDs.join(",") }
      })
}   


export function useAddress () {
    const {currentUser} = useContext(MenuContext)

  

    const fetchAddresses = async () => {
        if (currentUser && currentUser.addresses) {
             try {
                const response = await initializeAddress(currentUser.addresses)
                const addresses = response.data
                
                return addresses
             } catch (error) {
               console.error("Failed to fetch addresses:", error);
               return []
             }
           }
       };
  
  
  
  
  
    return {
        fetchAddresses
    }
    
  
}
