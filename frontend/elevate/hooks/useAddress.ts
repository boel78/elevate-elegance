import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MenuContext } from '../src/menuContext'




function initializeAddress(addressIDs){
    return axios.get("http://localhost:8080/api/address/getAll", {
        params: { addresses: addressIDs.join(",") }
      })
}   


export function useAddress () {
    const [currentAddresses, setCurrentAddresses] = useState([])
    const {currentUser} = useContext(MenuContext)

  
    const fetchAddressObjects = async (addressIDs) => {

        try {
            const response = await initializeAddress(addressIDs)
            const addresses = response.data
            
            return addresses
        } catch(error){
            console.log(error)
            return []
        }
        
        
    }

    const fetchAddresses = async () => {
        if (currentUser && currentUser.addresses) {
             try {
               const fetchedAddresses = await fetchAddressObjects(currentUser.addresses);
               console.log("fetchedaddreseses");
               
               console.log(fetchedAddresses);
               
               return fetchedAddresses
             } catch (error) {
               console.error("Failed to fetch addresses:", error);
             }
           }
       };
  
  
  
  
  
    return {
        fetchAddressObjects,
        fetchAddresses
    }
    
  
}
