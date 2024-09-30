import axios from 'axios'
import React, { useContext, useState } from 'react'
import { MenuContext } from '../src/menuContext'
import {toast} from 'react-hot-toast'
import { useUser } from './useUser'




function initializeAddress(addressIDs){
    return axios.get("http://localhost:8080/api/address/getAll", {
        params: { addresses: addressIDs.join(",") }
      })
}   


export function useAddress () {
    const {currentUser} = useContext(MenuContext)
    const {updateAddresses} = useUser();

  

    const fetchAddresses = async () => {
        if (currentUser && currentUser.addresses) {
             try {
                const response = await initializeAddress(currentUser.addresses)
                const addresses = response.data
                console.log(addresses)
                return addresses
             } catch (error) {
               console.error("Failed to fetch addresses:", error);
               return []
             }
           }
       };


       const fetchAllAddresses = async () => {
        try{
          const response = await axios.get("http://localhost:8080/api/address")
          const addresses = response.data
          return addresses
        } catch(error){
          console.log(error)
        }
       }



       const addAddress = async (e) => {
        
        e.preventDefault()
        const formData = new FormData(e.target)
        const newAddress = Object.fromEntries(formData)
        const addresses = await fetchAddresses()
        addresses.map((address) => {
          if(address.address === newAddress.address){
            updateAddresses(newAddress)
            toast.success("Your address have been added!")
            return
          }
        })
        try{
          const {data} = axios.post("http://localhost:8080/api/address", newAddress)
          if(data.error){
            toast.error(data.error)
          }
          else{
            toast.success("Your address have been added!")
          }
        }catch(error){
          console.log(error);
          
        }
      
        
       }


  
  
  
  
  
    return {
        fetchAddresses,
        fetchAllAddresses,
        addAddress
    }
    
  
}
